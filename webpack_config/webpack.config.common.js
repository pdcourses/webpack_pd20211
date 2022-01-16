const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.js',
  },
  context: path.resolve(__dirname, '../src'),
  plugin: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      meta: {
        viewport: 'width=device-with, initial-scale=1',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/i,
        use: {
          loader: 'file-loader',
          type: 'asset/resource',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/imgs',
            publicPath: 'assets/imgs',
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: 'file-loader',
          type: 'asset/resource',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
            publicPath: 'assets/fonts',
          },
        },
      },
    ],
  },
};

module.exports = config;
