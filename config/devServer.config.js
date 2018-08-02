const PATHS = require('./paths.config');

module.exports = {
    watchContentBase: true,
    contentBase: PATHS.build,
    progress: true,
    hot: true
};
