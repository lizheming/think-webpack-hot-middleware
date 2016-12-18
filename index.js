var connect = require('http-connect');
var webpackHotMiddleware = require('webpack-hot-middleware');

module.exports = function(compiler) {
  return function(http) {
    var app = new connect(http);
    app.use(webpackHotMiddleware(compiler));
  }
};