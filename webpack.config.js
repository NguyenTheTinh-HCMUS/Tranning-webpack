const path = require("path");

const VENDOR_LIBS=[
  'axios',
  'bootstrap',
  
  'jquery',
  'react',
  'react-dom',
  'react-redux',
  'react-router-dom',
  'redux',
  'redux-thunk'


]
const config = {
  entry: {
    
    bundle:"./src/index.js",
    vendor:VENDOR_LIBS
  
  },
  output: {
    filename: "[name].js",
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
