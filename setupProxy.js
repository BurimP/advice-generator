const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Change '/api' to the appropriate endpoint of your backend if applicable
    createProxyMiddleware({
      target: "http://localhost:3000/", // Replace with the URL of your backend server
      changeOrigin: true,
      // Add any additional options or headers if required
    })
  );
};
