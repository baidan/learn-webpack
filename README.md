# webpack新手入門demo
安裝：
1，npm install
2，npm run build
3，npm run dev

1、入口（Entry）：
使用 webpack 可以创建应用程序的所有依赖关系，而这个依赖关系的起始点被称之为入口，入口告诉 webpack 从哪里开始，并按依赖关系知道需要绑定些什么，简单的说，入口就是应用程序需要启动的第一个文件。
最简单的配置:
module.exports = {
    entry: './file.js'
};

2、出口（Output）：
把所有应用程序打包在一起之后，需要告诉 webpack 将打包后文件做何处理及存放的位置。如下面的例子，output.filename 和 output.path 告诉 webpack 打包后的文件的名字和文件存放的路径。
const path = require('path');
module.exports = {
  entry: './file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

3、加载器（Loaders）：
webpack 将所有的资源视为一个模块(css, .html, .scss, .jpg等等)，当有文件被添加到依赖关系中，webpack 中的Loaders就会把这些文件转换成一个模块，以便你在开发中进行引用，Loaders主要有2个目的：1. 识别文件应被哪个loader转换，2.转换该文件。下面的例子rules中为一模块定义了2个必须属性用于告诉 webpack，在遇到使用require或import引入的文件以.js或.jsx结尾时，需要用babel-loader进行转换。
module.exports = {
  entry: './file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
};

4、插件（Plugins）
Loaders是以单个文件为基础对文件进行操作，而Plugins与Loaders不同的是，Plugins是对整体进行操作。
使用插件，你只需要将其进行引入到配置文件并添加到plugins数组中，大多数的插件都是可通过选项进行配置。由于可以在配置中多次使用插件用于不同的目的，因此您需要通过使用新建来创建一个实例。
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 能过yarn或npm安装
const webpack = require('webpack'); // 访问Webpack的内置插件
const path = require('path');
module.exports = {
  entry: './file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),  //丑化压缩JS
    new HtmlWebpackPlugin({template: './src/index.html'})  //生成HTML模板
  ]
};

注：以上代码就是webpack 4大核心最基础的配置文件，参见更多的Entry, Output, Loaders, Plugins配置或插件。