const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'gugudan-settings',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']
    },

    entry: {
        app: ['./client']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR'],
                        },
                        debug: true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: [],
            },
        }],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true })
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
};