var connect = require('http-connect');
var webpackHotMiddleware = require('webpack-hot-middleware');

module.exports = function(compiler, options) {
  return function(http) {
    return new Promise(function(resolve) {
      var app = new connect(http);
      app.use(webpackHotMiddleware(compiler, options));
      app.use(resolve);
    });
  }
};