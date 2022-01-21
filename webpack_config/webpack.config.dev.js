const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

const path = require('path');
//test: /\.s[ac]ss$/i,
const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    static: {
      directory: path.join(__dirname, '../build'),
  }},
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});

module.exports = devConfig;
