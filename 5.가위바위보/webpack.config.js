module.exports = {
    name: "rsp_settings",
    mode: "development",
    devtool: "eval",
    resolve: {
        extensions: [".js", ".jsx"]
    },

    entry: {
        app: ["./client"]
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: "babel-loader",
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR'],
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: ['@babel/plugin-proposal-class-properties']
            }
        }]
    },
    plugins:[],
    output: {
        filename: "app.js",
        publicPath: "/dist",
    }

}