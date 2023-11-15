const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',  // 실제 서버의 주소와 포트로 변경
            changeOrigin: true,
        })
    );
};