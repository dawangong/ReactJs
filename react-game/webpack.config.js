const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {    // 入口文件
    entry: {
        app: './src/app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].min.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /.css$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader'],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /.html$/,
                loaders: ['html-loader'],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    mode: 'none',
    devServer: {
        port: 3000,
        hot: true,
        contentBase: './dist',
        open: true,
        overlay: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new cleanWebpackPlugin(['dist']),
        new webpack.LoaderOptionsPlugin({}),
        new webpack.HotModuleReplacementPlugin(),
    ]
};