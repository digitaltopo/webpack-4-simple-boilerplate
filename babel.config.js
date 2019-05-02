module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry'
            }
        ],
        '@babel/react'
    ],
    plugins: [
        'emotion',
        '@babel/plugin-syntax-dynamic-import',
        'react-hot-loader/babel'
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