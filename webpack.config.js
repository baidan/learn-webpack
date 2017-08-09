const path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [
    './src/entry.js',
    'webpack-dev-server/client?http://127.0.0.1:4000/',
    'webpack/hot/dev-server'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: "babel-loader"
    },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // 在HTML中创建style节点，内嵌CSS
        }, {
          loader: "css-loader" // 便CSS也具有像JS一样的模块化功能
        }, {
          loader: "sass-loader" // 将SASS编译成CSS
        }]
      }]
  }
}