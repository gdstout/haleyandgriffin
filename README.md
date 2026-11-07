# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Wishlist sharing previews (AWS Lambda)

The wishlist preview Lambda returns wishlist-specific title and Open Graph
metadata, then redirects visitors to the existing `/wishlist/:id` page.

1. In the AWS Lambda console, create a function using the **Node.js 22.x**
   runtime.
2. Upload `lambda/share-preview/index.js` as the function code. The function
   uses Node.js built-in `fetch`, so it has no package dependencies.
3. In **Configuration > Environment variables**, add:
   - `JSONBIN_API_ACCESS_KEY`: the Jsonbin access key. Store it only in Lambda;
     do not use a `REACT_APP_` name for this server-side value.
   - `APP_URL`: the app's HTTPS origin, for example `https://example.com`
     (without a path).
4. Create a **Function URL** with auth type **NONE**. This endpoint must be
   publicly readable so messaging apps can fetch the preview. Allow the console
   to add the required public resource policy. No CORS configuration is needed
   because the endpoint is opened as a link, not called from browser JavaScript.
5. Add the Function URL to the React app's environment as
   `REACT_APP_WISHLIST_SHARE_URL`. For local development, put it in the ignored
   `.env.local`; in AWS Amplify, add it as an app environment variable and
   redeploy. This value is public and is not a secret.

The app's **Copy Wishlist Link** buttons then copy the Lambda URL with the
wishlist ID as `?id=...`. Requests without the environment variable configured
continue to copy the current wishlist URL. The Lambda looks up only the
wishlist name in Jsonbin; visitors land on the existing React wishlist route.

To run the Lambda handler's tests locally (Node.js 18 or newer):

```sh
node --test lambda/share-preview/index.test.js
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
