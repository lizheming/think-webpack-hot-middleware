/**
 * this file will be loaded before server started
 * you can register middleware
 * https://thinkjs.org/doc/middleware.html
 */

/**
 * 
 * think.middleware('xxx', http => {
 *   
 * })
 * 
 */

var webpackDevMiddleware = require('think-webpack-dev-middleware');
var webpackHotMiddleware = require('think-webpack-hot-middleware');
var webpack = require('webpack');
var config = require('../../../webpack.config.js');
var compiler = webpack(config);

think.middleware(
  'webpack-dev', 
  webpackDevMiddleware(
    compiler,
    {
      publicPath: config.output.publicPath,
      stats: { colors: true }
    }
  )
);
think.middleware(
  'webpack-hot',
  webpackHotMiddleware(compiler, {log: think.log})
);