const webpack = require('webpack')
module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname+'/dist',
        hashDigestLength: 3,
        filename: "[chunkhash]_[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
}