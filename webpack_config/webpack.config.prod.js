const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const prodConfig = merge(commonConfig, {
  mode: 'production',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
      test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          "css-loader",
          'sass-loader',
          'postcss-loader'
        ],
      },
    ],
  },
});

module.exports = prodConfig;
