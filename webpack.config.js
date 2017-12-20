module.exports = {
    entry: {
        bundle: __dirname + '/src/js/index.js'
    },
    output: {
        path: __dirname + '/public',
        filename: 'main.js'
    },
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    module: {
        rules: [{
            test: /(\.jsx|.js)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        "env", "react"
                    ]
                }
            },
            exclude: /node_modules/
        }, 
        {
            test: /\.css$/,
            use: [{
                loader: "sytle-loader"
            }, {
                loader: "css-loader",
                options: {
                    modules: true
                }
            }]
        }, 
        {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        }]
    }
}