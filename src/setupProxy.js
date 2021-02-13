
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/**',
    createProxyMiddleware({
      // target: 'http://18.191.193.63:8080',
      // target: 'http://happymmall.com',
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
  app.use(
    '/test/**',
    createProxyMiddleware({
      target: 'https://jsonplaceholder.typicode.com',
      changeOrigin: true,
      pathRewrite: {
        '^/test': ''
      }
    })
  );
};