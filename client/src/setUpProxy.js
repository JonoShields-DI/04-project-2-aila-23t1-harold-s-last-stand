const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/test',
        createProxyMiddleware({
            target: process.env.API_URL,
            changeOrigin: true
        })
    )
}