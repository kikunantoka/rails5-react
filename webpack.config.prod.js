const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssnext = require('postcss-cssnext');

module.exports = {
  entry: {
    bundle: path.join(__dirname, '/front/src/js/app.js')
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.join(__dirname, '/public/assets/'),
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new ManifestPlugin({ fileName: 'webpack-manifest.json' }),
    new ExtractTextPlugin('[name]-[hash].css', { allChunks: true }),
  ],
  postcss: function() {
    return [cssnext];
  }
}