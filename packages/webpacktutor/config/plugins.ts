const HtmlWebpackPlugin = require("html-webpack-plugin");
// const _StyleLintPlugin = require("stylelint-webpack-plugin");
// const _OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const cssnano = require("cssnano");

const path = require("path");

const HtmlWebpackPluginIndex = new HtmlWebpackPlugin({
  minify: false,
  title: "webpackinit",
  filename: "index.html",
  template: "public/index.html",
});
const htmlWebpackPluginHeader = new HtmlWebpackPlugin({
  title: "header",
  filename: "header.html",
  template: "public/header.html",
});
const jsLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: `babel-loader`,
  },
};

const xmlLoader = {
  test: /\.xml$/,
  use: [`xml-loader`],
};
module.exports = {
  HtmlWebpackPluginIndex,
  htmlWebpackPluginHeader,
};
