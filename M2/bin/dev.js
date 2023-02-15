const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');
const express = require('express');

const webpackDevMiddleware= require('webpack-dev-middleware');
const webpackHotMiddleware= require('webpack-hot-middleware');

const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);
 
hmrServer.use(webpackDevMiddleware(clientCompiler, {
    publicPath:webpackClientConfig.output.publicPath,
    serverSideRender: true,
    noInfo: true,
    watchOptions: {
        ignore: /dist/,
    },
    writeToDisk: true,
    stats: 'errors-only'
}));

hmrServer.use(webpackHotMiddleware(clientCompiler,{
    path: '/static/__webpack_hmr',
}));

hmrServer.listen(3001, ()=>{
    console.log('hmr started at 3001') 
});

const compiler = webpack(webpackServerConfig);

compiler.run((err)=>{
    if (err) {
        console.log('compilation failed: ', err);
    }
    compiler.watch({},(err)=>{
        if (err) {
            console.log('compilation failed: ', err);
        }
        console.log('everything is ok'); 
    });

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client'),
        ]

    })
})