// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/scripts.js", // The entry point of your application
  output: {
    filename: "main.js", // The output filename
    path: path.resolve(__dirname, "dist"), // The output directory
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ["style-loader", "css-loader"],
  //     },
  //   ],
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "css", to: "css" }, // Copies the 'css' directory to the output directory
        { from: "documentation", to: "documentation" }, // Copies the 'documentation' directory to the output directory
        { from: "images", to: "images" }, // Copies the 'images' directory to the output directory
        { from: "js", to: "js" }, // Copies the 'js' directory to the output directory
        { from: "php", to: "php" }, // Copies the 'php' directory to the output directory
        { from: "webfonts", to: "webfonts" }, // Copies the 'webfonts' directory to the output directory
      ],
    }),
  ],
};
