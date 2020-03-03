const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'style.css'
  })],
  mode: "development"
};

module.exports = config;
