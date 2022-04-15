const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //这里必须这样写
const plugins = require("./plugins");
const loaders = require("./loaders");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/index.js"],
    another: ["@babel/polyfill", "./src/another-module.js"],
    bootcss: ["@babel/polyfill", "./src/bootcss.js"],
  },
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "../build"),
    // 在script标签上添加crossOrigin,以便于支持跨域脚本的错误堆栈捕获
    crossOriginLoading: "anonymous",
  },
  plugins: [
    new webpack.BannerPlugin("版权所有翻版必究"),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(), //这里注意要大写啊
    plugins.htmlWebpackPluginHeader,
    plugins.HtmlWebpackPluginIndex,

    // new MiniCssExtractPlugin({
    //   filename: "[name].[hash].css",
    //   chunkFilename: "[id].css",
    // }),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, "../src"),
    ],
    alias: {
      components: path.resolve(__dirname, "/src/components"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",

    },
    runtimeChunk: "single",
  },
  module: {
    rules: [
      loaders.cssLoader,
      loaders.csvLoader,
      loaders.xmlLoader,
      loaders.fileLoader,
      loaders.htmlLoader,
    ],
  },
};
