module.exports = {
    presets: [
        '@babel/react',
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'usage'
            }
        ]
    ],
    plugins: [
        'emotion',
        'react-hot-loader/babel',
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
            plugins: [
                [
                    'emotion',
                    {
                        hoist: true
                    }
                ]
            ]
        },
        development: {
            plugins: [
                [
                    'emotion',
                    {
                        sourceMap: true,
                        autoLabel: true
                    }
                ]
            ]
        }
    }
};
