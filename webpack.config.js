const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version'],
                  cascade: false
                })
              ],
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              outputStyle: 'expanded'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css",
      chunkFilename: "[id].css",
    }),
    new CopyWebpackPlugin([
      {
        from: './dist/index.html',
        to: path.resolve(__dirname, 'src/'),
      }, {
        from: './dist/css',
        to: path.resolve(__dirname, 'src/css/'),
      }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  watch: true,
};