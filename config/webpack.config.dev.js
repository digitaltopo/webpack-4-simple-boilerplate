// Imports
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

// Configs
const baseConfig = require('./webpack.config.base');
const PATHS = require('./paths.config');
const devServer = require('./devServer.config.js');

// Dev Configuration
const config = {
    devtool: 'eval', // Use 'cheap-module-eval-source-map' for more info in dev mode
    mode: 'development',
    /* 
    // NOTE: Seems to work without @hot-loader/react-dom...
    // @see https://github.com/gaearon/react-hot-loader#react--dom
    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom' // https://github.com/hot-loader/react-dom 
        }
    },  
    */
    output: {
        filename: '[name].[hash].js' // Use [hash] to speed things up
        // pathinfo: false // Turn off pathinfo to speed things up
    },
    devServer: devServer,
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = merge(baseConfig, config);
