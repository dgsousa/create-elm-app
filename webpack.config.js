var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: path.join(__dirname, "src/index.js"),
        styles: "./styles/application.scss"
    },

    output: {
        path: path.resolve(__dirname, "public/"),
        filename: "[name].js"
    },

    resolve: {
        extensions: ['.js', '.elm']
    },

    module: {
        rules: [
            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                loader: "elm-webpack-loader"
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                  ]
            }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body",
            filename: "index.html"
        })
    ]
}