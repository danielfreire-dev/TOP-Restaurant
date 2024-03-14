const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  content: },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //maybe "index.[hashcontent].html"?
      template: "./src/template.html",
      hash: true,
      title: "TOP-Restaurant",
    }),
  ],
};
