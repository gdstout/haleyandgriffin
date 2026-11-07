"use strict";

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

const response = (
  statusCode,
  body,
  contentType = "text/plain; charset=utf-8",
) => ({
  statusCode,
  headers: {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
  },
  body,
});

const getWishlistId = (event) =>
  event.queryStringParameters?.id || event.pathParameters?.id;

const getRedirectUrl = (wishlistId, appUrl) =>
  new URL(`/wishlist/${encodeURIComponent(wishlistId)}`, appUrl).toString();

const getShareUrl = (event, wishlistId, fallbackUrl) => {
  const domainName = event.requestContext?.domainName;
  if (!domainName) return fallbackUrl;

  const shareUrl = new URL(event.rawPath || "/", `https://${domainName}`);
  shareUrl.searchParams.set("id", wishlistId);
  return shareUrl.toString();
};

const renderPreview = ({ name, redirectUrl, shareUrl }) => {
  const safeName = escapeHtml(name);
  const safeDescription = escapeHtml(`View ${name}'s wishlist`);
  const safeRedirectUrl = escapeHtml(redirectUrl);
  const redirectScriptUrl = JSON.stringify(redirectUrl).replace(
    /</g,
    "\\u003c",
  );

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${safeName}</title>
    <meta property="og:type" content="website">
    <meta property="og:title" content="${safeName}">
    <meta property="og:description" content="${safeDescription}">
    <meta property="og:url" content="${escapeHtml(shareUrl)}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${safeName}">
    <meta name="twitter:description" content="${safeDescription}">
    <meta http-equiv="refresh" content="0;url=${safeRedirectUrl}">
  </head>
  <body>
    <p>Opening <a href="${safeRedirectUrl}">${safeName}</a>...</p>
    <script>window.location.replace(${redirectScriptUrl});</script>
  </body>
</html>`;
};

exports.handler = async (event = {}) => {
  const wishlistId = getWishlistId(event);
  if (!wishlistId || !/^[A-Za-z0-9_-]{1,128}$/.test(wishlistId)) {
    return response(400, "A valid wishlist ID is required.");
  }

  const apiKey = process.env.JSONBIN_API_ACCESS_KEY;
  const configuredAppUrl = process.env.APP_URL;
  if (!apiKey || !configuredAppUrl) {
    console.error("JSONBIN_API_ACCESS_KEY and APP_URL must be configured.");
    return response(500, "Wishlist preview is not configured.");
  }

  let appUrl;
  try {
    appUrl = new URL(configuredAppUrl);
  } catch (error) {
    console.error("APP_URL must be a valid HTTPS URL.", error);
    return response(500, "Wishlist preview is not configured.");
  }
  if (appUrl.protocol !== "https:" || appUrl.username || appUrl.password) {
    console.error("APP_URL must be a valid HTTPS origin.");
    return response(500, "Wishlist preview is not configured.");
  }

  let data;
  try {
    const upstreamResponse = await fetch(
      `https://api.jsonbin.io/v3/b/${encodeURIComponent(wishlistId)}/latest`,
      {
        headers: {
          "X-Access-Key": apiKey,
        },
      },
    );
    if (!upstreamResponse.ok) {
      const statusCode = upstreamResponse.status === 404 ? 404 : 502;
      return response(statusCode, "Unable to load this wishlist.");
    }
    data = await upstreamResponse.json();
  } catch (error) {
    console.error("Wishlist preview lookup failed.", error);
    return response(502, "Unable to load this wishlist.");
  }

  const name = data?.record?.name;
  if (typeof name !== "string" || !name.trim()) {
    console.error("Jsonbin returned a wishlist without a name.");
    return response(502, "Unable to load this wishlist.");
  }

  const redirectUrl = getRedirectUrl(wishlistId, appUrl);
  const shareUrl = getShareUrl(event, wishlistId, redirectUrl);
  return response(
    200,
    renderPreview({ name: name.trim(), redirectUrl, shareUrl }),
    "text/html; charset=utf-8",
  );
};
