module.exports = {
    presets: ['@babel/react', '@babel/preset-env'],
    plugins: ['emotion', 'react-hot-loader/babel'],
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
