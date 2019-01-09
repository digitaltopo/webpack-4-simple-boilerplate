const PATHS = require('./paths.config');

module.exports = {
    watchContentBase: true,
    contentBase: PATHS.build,
    progress: false,
    hot: true,
    historyApiFallback: true
};
