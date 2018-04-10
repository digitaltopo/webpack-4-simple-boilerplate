// Imports
const path = require("path");
const merge = require("webpack-merge");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// Configs
const baseConfig = require("./webpack.config.base");
const PATHS = require("./paths.config");

// Webpack Production Configuration
module.exports = merge(baseConfig, {
    output: {
        filename: "[name].[chunkhash].js"
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin([PATHS.build], {
            root: PATHS.root,
            verbose: false
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(PATHS.src, "index.html")
        })
    ]
});
