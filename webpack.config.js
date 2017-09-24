const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: [ 'style-loader', 'css-loader' ] }
    ]
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, 'app')]
  },
  plugins: [new htmlWebpackPlugin({
    inject: false,
    template: require('html-webpack-template'),//from https://github.com/jaketrent/html-webpack-template
    appMountId: 'app'
  })],
  devServer: {
    port: 8000,
    proxy: {
      "*": "http://localhost:80"
    },
  }
}