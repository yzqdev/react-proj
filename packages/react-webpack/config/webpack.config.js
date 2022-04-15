const path = require(`path`);
const webpack = require(`webpack`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`); //这里必须这样写
const plugins = require("./plugins");
let ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const loaders = require("./loaders");
module.exports = {
  mode: "development",
  entry: {
    index: `../src/index.js`,
    app: "../src/app.jsx"
  },
  output: {
    filename: `[name].[hash].js`,
    path: path.resolve(__dirname, `../build`),
    // 在script标签上添加crossOrigin,以便于支持跨域脚本的错误堆栈捕获
    crossOriginLoading: `anonymous`
  },
  plugins: [
    new webpack.BannerPlugin(`版权所有翻版必究`),
    new CleanWebpackPlugin(), //这里注意要大写啊
    plugins.HtmlWebpackPlugin,
    
    // 拆分后会把css文件放到dist目录下的css/style.css
    new ExtractTextWebpackPlugin("css/style.css"),
    new webpack.HotModuleReplacementPlugin(),
    
  ],
  resolve: {
    extensions: [".js", ".jsx",'.ts','.tsx'],
    modules: [
      path.resolve(__dirname, `../src`),
      path.resolve(__dirname, `../node_modules`)
    ],
    alias: {
      components: path.resolve(__dirname, `/src/components`)
    }
  },
  optimization: {
    splitChunks: {
      chunks: `async`,
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: `~`,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: `vendors`,
          chunks: `all`
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: `single`
  },
  module: {
    rules: [
      loaders.csLoader,
      loaders.fileLoader,
      // loaders.xmlLoader,
      loaders.tsLoader,
      loaders.jsLoader,
      loaders.jsxLoader
    ]
  },
  devtool: `inline-source-map`,

  devServer: {
    hot: true,
    contentBase: `./dist`,
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    port: 7230,
    host: '0.0.0.0'
  }
};
