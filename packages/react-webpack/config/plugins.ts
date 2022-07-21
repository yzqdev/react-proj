const _HtmlWebpackPlugin = require("html-webpack-plugin");





const HtmlWebpackPlugin = new _HtmlWebpackPlugin(
  {
    minify: false,
    title: "webpackinit",
    filename: "index.html",
    template: "public/index.html"
  }
);

module.exports = {
  HtmlWebpackPlugin
};
