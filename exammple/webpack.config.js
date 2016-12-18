var webpack = require('webpack');
var path = require('path');
var src = './www/static/src';
var dist = './www/static/js';

module.exports = {
  context: __dirname,
  entry: [
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    // And then the actual application
    src + '/client.js'
  ],
  output: {
    path: path.resolve(dist),
    publicPath: '/static/js',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};