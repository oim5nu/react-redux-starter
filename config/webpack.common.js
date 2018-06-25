/**
 * COMMON WEBPACK CONFIGURATION
 */
const path = require('path');
const webpack = require('webpack');

process.noDeprecation = true;

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/'
  }, options.output),
  optimization: options.optimization,
  module: {
    rules: [
      {
        test: /\.js$/,
        // without this would cause error: 
        // Cannot read property 'EventSource' of undefined
        include:[path.resolve(__dirname,'../src')], 
        exclude: ['node_modules'],
        use: [{ 
          loader: 'babel-loader',
          options: options.babelQuery,
        }],
      }, {
        test: /\.s(a|c)ss$/,
        exclude: ['node_modules'],
        use: ['style-loader','css-loader','sass-loader'],
      }, { // Preprocess 3rd party .css files located in node_modules 
        test: /\.css$/,
        include: ['node_modules'],
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader'
      }, {
        test: /\.svg$/,
        use: [{
          loader: 'svg-url-loader',
          options: {
            // Inline files smaller than 10KB
            limit: 10 * 1024,
            noquotes: true,
          },
        }]
      }, {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // Inline files smaller than 10KB
            limit: 10 * 1024,
          }
        }, {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: { enabled: false }, // errors caused in some linux env
            gifsicle: { interlaced: true},
            optipng: { optimizationLevel: 7 }, 
            pngquant: {
              quality: '65-90',
              speed: 4
            }
          }
        }]          
      }, {
        test: /\.html$/,
        use: 'html-loader',
      }, {
        test: /\.json$/,
        use: 'json-loader'
      }, {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      }
    ]
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically 
    // drop any unreadchable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    })
  ]),
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: [ '.js', 'jsx', '.scss', '.react.js' ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main'
    ]
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {}
});