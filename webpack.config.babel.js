'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }],
  },
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets', // New
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'), // New
  },
};
