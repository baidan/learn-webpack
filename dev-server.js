var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js'); 
var path = require('path');
var compiler = webpack(config);
var server = new WebpackDevServer(compiler,{
    //webpack-dev-server
    hot:true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    inline:true,
    stats: {
        colors: true
    }
})
server.listen(4000,'localhost',()=>{});
