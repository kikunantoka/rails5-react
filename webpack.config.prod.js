const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssimport = require('postcss-import')
const cssnext = require('postcss-cssnext')

module.exports = {
  entry: {
    bundle: path.join(__dirname, '/front/src/js/app.js'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.join(__dirname, '/public/assets/'),
    publicPath: '/assets/',
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
        loader: ExtractTextPlugin.extract(
          'style',
          ['css?modules&localIdentName=[name]--[local]--[hash:base64:5]', 'postcss']
        ),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
        include: /node_modules/,
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'file?name=img/[name]-[hash].[ext]',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=[name].[ext]',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=[name].[ext]',
      },
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
  postcss() {
    return [cssimport, cssnext]
  },
}
