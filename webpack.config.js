const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.pug$/, use: [{ loader: 'simple-pug-loader' }] },
      { test: /\.txt$/i, use: 'raw-loader' },
      {
        test: /\.(gif|png|jpe?g|svg)$/i, use: ['file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ]
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  mode: 'development',
  watch: true
}