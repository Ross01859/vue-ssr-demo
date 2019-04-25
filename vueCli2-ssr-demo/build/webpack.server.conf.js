const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.conf");
const nodeExternals = require("webpack-node-externals");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");

// 去除打包css的配置
webpackBaseConfig.module.rules[1].options = "";

module.exports = merge(webpackBaseConfig, {
  entry: "./src/entry-server.js",
  // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
  output: {
    libraryTarget: "commonjs2"
  },
  // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
  target: "node",

  // 对 bundle renderer 提供 source map 支持
  devtool: "source-map",

  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.VUE_ENV": '"server"'
    }),
    new VueSSRServerPlugin()
  ]
});
