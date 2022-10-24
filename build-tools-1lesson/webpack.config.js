const { resolve } = require('path')

module.exports = {
    entry: './js/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\\.(png|jpe?g|gif|mp3)$/i,
                use: "file-loader",
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test2: /\\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}