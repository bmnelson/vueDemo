const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        vueApp: './src/index.js',
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, "./dist/js"),
        filename: 'bundle.js'
    },

    resolve: {
        alias: {'@': path.resolve(__dirname, './src/'),},
        extensions: ['.js', '.vue', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /.(eot|svg|ttf|woff|woff2)$/,
                loader: ['url-loader']
            }
        ]
    },


    devServer: {
        //设置服务器访问的基本目录
        contentBase: path.resolve(__dirname, './'), // 要求服务器访问dist目录
        host: 'localhost', // 设置服务器ip地址，可以是localhost
        port: 8080, // 设置端口号
        open: true, //自动拉起浏览器
        hot: true,//模块热跟新
        historyApiFallback: {
            rewrites: [
                {from: /./, to: '/index.html'}
            ]
        },
        proxy: {
            '/api/**': {
                target: 'https://www.sojson.com',
                secure: false,
                changeOrigin: true,
                pathRewrite: {'^/api': '/'}
            },
            '/github/**': {
                target: 'https://github.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/github': '/'
                }
            }
        }
    },

    plugins: [
        new VueLoaderPlugin(),

    ]
}
