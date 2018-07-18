const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3012,
  },
});
