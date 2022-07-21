const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader",
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".less"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    plugins: [],
  },
};
