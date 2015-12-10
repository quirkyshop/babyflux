var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './',
    port: 9090
  },
  entry:{
    app:['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:9090',path.resolve(__dirname, 'src/js/app.js')],
    mobile:['webpack/hot/dev-server','webpack-dev-server/client?http://localhost:9090',path.resolve(__dirname, 'src/js/mobile.js')],
  },
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
      loaders: [
          {
              test: /\.jsx?$/,
              exclude:/node_modules/,
              loader: 'react-hot!babel-loader',
          },
          { test: /\.css$/, loader: "style!css" },
          // LESS
          {test: /\.less$/, loader: 'style!css!less'},
          {test: /\.(png|jpg)$/, loader: 'url?limit=25000'}
      ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new OpenBrowserPlugin({ url: 'http://localhost:9090' })
  ]
};
