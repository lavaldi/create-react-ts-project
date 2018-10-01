const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "tslint-loader"
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "awesome-typescript-loader"
          },
          "stylelint-custom-processor-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
