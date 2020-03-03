const path = require("path");

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
        use: [ "style-loader","css-loader"]
      }
    ]
  },
  mode: "development"
};




// module: {
//   rules: [
//     {
//       use: "babel-loader",
//       test: /\.js$/,
//       exclude: '/node_modules'
//     },
//     {
//       test: /\.css$/,
//       use: [MiniCssExtractPlugin.loader, "css-loader"]
//     }
//   ]
// },
// plugins: [new MiniCssExtractPlugin({
//   filename: 'style.css'
// })]

module.exports = config;
