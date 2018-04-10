// Imports
const path = require("path");
const merge = require("webpack-merge");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Configs
const baseConfig = require("./webpack.config.base");
const PATHS = require("./paths.config");

// Dev Configuration
module.exports = merge(baseConfig, {
    devtool: "eval",
    output: {
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(PATHS.src, "index.html")
        })
    ]
});
