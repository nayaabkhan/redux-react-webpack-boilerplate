var webpack = require('webpack');

var webpackConfig = {
  entry: './index.js',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ]
  },

  devtool: 'source-map',

  output: {
    filename: "bundle.js"
  }
};


module.exports = webpackConfig;
