var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './source/index'
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel'],
      include: path.join(__dirname, '../source')
    }]
  }
};
