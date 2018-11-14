const PATHS = require('./paths.config');

module.exports = {
    contentBase: PATHS.build,
    progress: false,
    hot: true,
    historyApiFallback: true,
    logLevel: 'silent'
};
