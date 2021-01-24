const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3001,
  },
  output: {
    path: path.resolve('dist'),
    publicPath: 'http://localhost:3001/',
    filename: 'bundle.js',
  },
});
