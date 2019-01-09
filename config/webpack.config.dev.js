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
    devtool: 'eval',
    mode: 'development',
    resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom' // https://github.com/hot-loader/react-dom
        }
    },
    output: {
        filename: '[name].js'
    },
    devServer: devServer,
    plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = merge(baseConfig, config);
