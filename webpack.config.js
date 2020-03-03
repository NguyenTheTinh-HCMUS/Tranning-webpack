const path = require("path");
const webpack=require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
const devServer={
  port: 4040,
  open: true
}
const config = {
  entry: {
    
    bundle:"./src/index.js",
    vendor:VENDOR_LIBS
  
  },
  output: {
    filename: "[name].[chunkhash].js",
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
  mode: "development",
  plugins:[
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery"
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }
  ,
  devServer
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
