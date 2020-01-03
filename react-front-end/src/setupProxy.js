const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api/other", {
      target: "https://api.i-meto.com",
      changeOrigin: true,
      pathRewrite: {"^/api/other" : "/"}
    })
  );
  app.use(
    proxy("/api", {
      target: "http://localhost:3000",
      changeOrigin: true
    })
  );
};
