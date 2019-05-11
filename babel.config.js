module.exports = {
    presets: [['@babel/preset-env']],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        [
            '@babel/plugin-transform-runtime',
            {
                regenerator: true
            }
        ]
    ],
    env: {
        production: {
            plugins: []
        },
        development: {
            plugins: []
        }
    }
};
