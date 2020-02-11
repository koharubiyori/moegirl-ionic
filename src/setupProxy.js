const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/api.php', {
    target: 'https://zh.moegirl.org',
    changeOrigin: true,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
    },
    
    cookieDomainRewrite: '',
    cookiePathRewrite: '/'
  }))
}