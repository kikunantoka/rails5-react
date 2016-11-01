const path = require('path')
const webpack = require('webpack')
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
    filename: '[name].js',
    path: path.join(__dirname, '/public/assets/'),
    publicPath: 'http://localhost:8080/',
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
        loaders: [
          'style',
          'css?modules&localIdentName=[name]--[local]--[hash:base64:5]',
          'postcss',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        include: /node_modules/,
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'file?name=img/[name].[ext]',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  postcss() {
    return [cssimport, cssnext]
  },
  devServer: {
    contentBase: '/public/assets/',
  },
}
