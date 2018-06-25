/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = require('./webpack.common.js')({
  mode: 'development',
  // Add hot reloading in development
  entry: [
    'eventsource-polyfill', // for hot-loading with IE
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/index.js')
  ],
  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  optimization: {
    minimize: false,
  },

  // Add development plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // hot reloading needed
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: 'src/index.html'
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false // show a warning when there is a circular dependency
    })
  ],
  /*
  babelQuery: {
    // This is a feature of 'babel-loader' for webpack (not babel itself)
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds
    cacheDirectory: true,
    plugins: ['react-hot-loader/babel']
  },
  */
  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-eval-source-map',
  performance: {
    hints: false
  }
});