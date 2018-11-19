const path = require('path');

module.exports = (baseConfig, env, config) => {
    // typescript
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('awesome-typescript-loader')
    });
    config.resolve.extensions.push('.ts', '.tsx');

    // scss
    config.module.rules.push({
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
    });

    return config;
};
