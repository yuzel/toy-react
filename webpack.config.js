module.exports = {
    entry: {
      main: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        // 处理jsx语法
                        plugins: [
                            //多个插件
                            [
                            // plugins的名字
                            "@babel/plugin-transform-react-jsx",
                            // plugins的配置
                            {pragma: "ToyReact.createElement"}
                            ]
                      ]
                    }
                }
            }
        ]
    },
    mode: "development",
    optimization: {
        minimize: false
    }
  };