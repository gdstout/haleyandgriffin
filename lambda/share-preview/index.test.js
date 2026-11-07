"use strict";

const { afterEach, test } = require("node:test");
const assert = require("node:assert/strict");
const { handler } = require("./index");

const originalApiKey = process.env.JSONBIN_API_ACCESS_KEY;
const originalAppUrl = process.env.APP_URL;

afterEach(() => {
  if (originalApiKey === undefined) {
    delete process.env.JSONBIN_API_ACCESS_KEY;
  } else {
    process.env.JSONBIN_API_ACCESS_KEY = originalApiKey;
  }
  if (originalAppUrl === undefined) {
    delete process.env.APP_URL;
  } else {
    process.env.APP_URL = originalAppUrl;
  }
});

test("returns wishlist metadata and redirects browsers to the app", async (t) => {
  process.env.JSONBIN_API_ACCESS_KEY = "server-secret";
  process.env.APP_URL = "https://example.com";
  t.mock.method(global, "fetch", async (url, options) => {
    assert.equal(
      url,
      "https://api.jsonbin.io/v3/b/abc123/latest"
    );
    assert.equal(options.headers["X-Access-Key"], "server-secret");
    return {
      ok: true,
      json: async () => ({ record: { name: "Holiday Wishlist" } }),
    };
  });

  const result = await handler({
    queryStringParameters: { id: "abc123" },
    rawPath: "/",
    requestContext: { domainName: "preview.example.net" },
  });

  assert.equal(result.statusCode, 200);
  assert.match(result.headers["Content-Type"], /^text\/html/);
  assert.match(result.body, /<title>Holiday Wishlist<\/title>/);
  assert.match(
    result.body,
    /property="og:title" content="Holiday Wishlist"/
  );
  assert.match(result.body, /content="https:\/\/preview\.example\.net\/\?id=abc123"/);
  assert.match(result.body, /https:\/\/example\.com\/wishlist\/abc123/);
  assert.doesNotMatch(result.body, /server-secret/);
});

test("escapes wishlist names before placing them in HTML", async (t) => {
  process.env.JSONBIN_API_ACCESS_KEY = "server-secret";
  process.env.APP_URL = "https://example.com";
  t.mock.method(global, "fetch", async () => ({
    ok: true,
    json: async () => ({ record: { name: '<img src=x onerror="alert(1)">' } }),
  }));

  const result = await handler({ queryStringParameters: { id: "abc123" } });

  assert.equal(result.statusCode, 200);
  assert.match(result.body, /&lt;img src=x onerror=&quot;alert\(1\)&quot;&gt;/);
  assert.doesNotMatch(result.body, /<img src=x/);
});

test("rejects malformed wishlist IDs before fetching", async (t) => {
  t.mock.method(global, "fetch", async () => {
    assert.fail("fetch must not run for an invalid wishlist ID");
  });

  const result = await handler({ queryStringParameters: { id: "../secret" } });

  assert.equal(result.statusCode, 400);
});

test("reports a missing wishlist as not found", async (t) => {
  process.env.JSONBIN_API_ACCESS_KEY = "server-secret";
  process.env.APP_URL = "https://example.com";
  t.mock.method(global, "fetch", async () => ({ ok: false, status: 404 }));

  const result = await handler({ queryStringParameters: { id: "abc123" } });

  assert.equal(result.statusCode, 404);
  assert.equal(result.body, "Unable to load this wishlist.");
});
