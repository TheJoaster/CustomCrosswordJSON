const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        './src/main.js'
    ],
    devtool: 'source-map',
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        hot: true,
        open: true,
        liveReload:true,
        client: {
            overlay: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Crossword Creator Test',
            template: path.resolve('./src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: './images',
                        name: "[name].[ext]"
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ],
    }
};