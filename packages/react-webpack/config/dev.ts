const webpack=require("webpack")
const {merge}= require("webpack-merge");
const common = require("./common");
module.exports = merge(common, {
  devtool: "inline-source-map",
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    contentBase: "../dist",
    historyApiFallback: true, //不跳转
    clientLogLevel: "none",
    hot: true,
    // open: false,
    inline: true,
    compress: true,
    port: 9800,
  },plugins: [ new webpack.HotModuleReplacementPlugin(),]
});
