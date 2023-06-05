const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, "/src/index.js"), // 入口文件
    output: {
        path: path.join( __dirname, "/dist"), //打包后的文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    },
    devServer: {
        port: 9000,
        hot: true,
        open: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html'
    })],
    devtool: 'source-map'
}
