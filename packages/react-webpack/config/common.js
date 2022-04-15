const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //这里必须这样写
const plugins = require("./plugins");
const loaders = require("./loaders");
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[chunkhash].js",

    path: path.resolve(__dirname, "../build"),
    // 在script标签上添加crossOrigin,以便于支持跨域脚本的错误堆栈捕获
    crossOriginLoading: "anonymous",
  },
  plugins: [
    new webpack.BannerPlugin("版权所有翻版必究"),
    new CleanWebpackPlugin(), //这里注意要大写啊
    plugins.HtmlWebpackPlugin,
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    modules: [
      path.resolve(__dirname, "../src"),
      path.resolve(__dirname, "../node_modules"),
    ],
    alias: {
      components: path.resolve(__dirname, "../src/components"),
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
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: "single",
  },
  module: {
    rules: [
      // loaders.csLoader,
      loaders.fileLoader,
      loaders.tsLoader,
      loaders.lessLoader,
      // loaders.xmlLoader,
      loaders.jsLoader,
    ],
  },
};
