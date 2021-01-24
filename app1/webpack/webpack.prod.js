const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve('dist'),
    publicPath: 'http://demo-module-federation-app1.surge.sh/',
    filename: 'bundle.js',
  },
});
