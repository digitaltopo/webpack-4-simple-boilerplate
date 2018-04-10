// Imports
const path = require("path");
const webpack = require("webpack");

// Plugins

// Check for development mode
const IS_DEV = process.env.NODE_ENV === "development";
const PATHS = require("./paths.config");

// Webpack Base Configuration
const config = {
  entry: path.join(PATHS.src, "index.js"),
  progress: true,
  stats: {
    colors: false
    //hash: true,
    //timings: true,
    //assets: true,
    //chunks: true,
    //chunkModules: true,
    //modules: true,
    //children: true,
  },
  output: {
    path: PATHS.build,
    pathinfo: true,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: []
};
