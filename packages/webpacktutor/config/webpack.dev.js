const {merge} = require("webpack-merge");
const os=require('os');
const common = require("./webpack.common.js");
const utils=require('./webpack.utils')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = merge(common, {
  devtool: "inline-source-map",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    contentBase: "./dist", historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port:7000,
    host: utils.getIpAddress()
  }

});
