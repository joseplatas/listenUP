const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [new htmlWebpackPlugin()],
  devServer: {
    port: 8000,
    proxy: {
      "*": "http://localhost:80"
    },
  }
}