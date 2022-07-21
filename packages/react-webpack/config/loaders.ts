const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const plugins = require("./plugins");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const cssLoader = {
  test: /\.css$/,
  use: [
    // {
    //   loader: MiniCssExtractPlugin.loader
    // },
    {
      loader: "css-loader",
    },
    {
      loader: "postcss-loader",
      options: {
        config: {
          path: path.join(__dirname, "./postcss.config.js"),
        },
      },
    },
  ],
};
const lessLoader = {
  test: /\.less$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "less-loader" },
  ],
};
const csLoader = {
  test: /\.css$/,
  use: ExtractTextWebpackPlugin.extract({
    // 将css用link的方式引入就不再需要style-loader了
    fallback: "style-loader",
    use: ["css-loader", "postcss-loader"], // 从右向左解析
  }),
};
const sassLoader = {
  test: /\.scss$/,
  use: [
    // {
    //   loader: MiniCssExtractPlugin.loader
    // },
    {
      loader: "css-loader",
    },
    {
      loader: "postcss-loader",
      options: {
        config: {
          path: path.join(__dirname, "./postcss.config.js"),
        },
      },
    },
    {
      loader: "sass-loader",
    },
  ],
};
const fileLoader = {
  test: /\.(png|svg|jpg|gif)$/,
  use: [`file-loader`],
};
const jsxLoader = {
  test: /\.jsx$/,
  exclude: /(node_modules)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react"],
    },
  },
};
const tsLoader = {
  test: /\.tsx?$/, // ts文件处理
  use: "ts-loader",
};
const svgLoader = {
  test: /\.svg$/,
  use: [
    {
      loader: "image-webpack-loader",
    },
    {
      loader: "base64-inline-loader",
    },
  ],
};

const jsLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};
const eslintLoader = {
  test: /\.js$/,
  enforce: "pre",
  exclude: /node_modules/,
  use: {
    loader: "eslint-loader",
    options: {
      configFile: path.join(__dirname, "../.eslintrc"),
    },
  },
};
const csvLoader = {
  test: /\.(csv|tsc)$/,
  use: [`csv-loader`],
};

const htmlLoader = {
  test: /\.html$/,
  use: "file-loader?name=[name].[ext]",
};
const xmlLoader = {
  test: /\.xml$/,
  use: ["xml-loader"],
};
const imageLoader = {
  test: /\.(png|jpg|jpeg|gif)$/,
  use: "url-loader?limit=1024&name=images/[name]_[hash].[ext]",
};

module.exports = {
  jsLoader,
  svgLoader,
  xmlLoader,
  imageLoader,
  csvLoader,
  csLoader,
  fileLoader,
  lessLoader,
  sassLoader,
  cssLoader,
  jsxLoader,
  tsLoader,
  htmlLoader,
};
