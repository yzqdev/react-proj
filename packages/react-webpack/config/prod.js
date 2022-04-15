const webpack = require("webpack");

const {merge} = require("webpack-merge");
const common = require("./common");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(common, {
  mode:`production`,
  devtool: 'inline-source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
          sourceMap: false,
        },
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
