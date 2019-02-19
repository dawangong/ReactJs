const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    /*入口*/
    entry: path.join(__dirname, 'src/index.js'),

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: '5000',
        historyApiFallback: true,
        host: '0.0.0.0',
        open: true,
        hot: true
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
        new webpack.HotModuleReplacementPlugin(),
    ]

};