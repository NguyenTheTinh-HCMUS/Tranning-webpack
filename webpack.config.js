const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: '/node_modules'
      },
      {
        test: /\.css$/,
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
