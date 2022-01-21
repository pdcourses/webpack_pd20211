const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../build'),
  },
  context: path.resolve(__dirname, '../src'),
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/imgs',
            publicPath: 'assets/imgs',
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        use: {
          loader: 'file-loader',
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
