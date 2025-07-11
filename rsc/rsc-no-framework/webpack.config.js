// yes webpack is scary

const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");

const mode = process.env.NODE_ENV || "development";
const development = mode === "development";

const config = {
  mode,
  entry: "./src/Client.jsx",
  module: {
    rules: [
      {
        test: /\.jsx?$/, // anything ends with js or jsx
        use: "babel-loader", // run it through babel ok
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      publicPath: "/assets/",
      template: "./index.html",
    }),
    new ReactServerWebpackPlugin({ isServer: false }),
  ],
  output: {
    chunkFilename: development
      ? "[id].chunk.js"
      : "[id].[contenthash].chunk.js",
    path: path.resolve(__dirname, "dist"), // dont have to define __dirname on webpack
    filename: "[name].js",
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};

module.exports = config;