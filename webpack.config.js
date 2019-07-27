const path = require("path");
const Html = require("html-webpack-plugin");

const production = process.env.NODE_ENV === "production";

module.exports = {
  mode: production ? "production" : "development",
  devtool: production ? "hidden-source-map" : "cheap-source-map",
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  plugins: [
    new Html({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    })
  ],

  devServer: {
    host: "localhost",
    port: 3000,
    open: false,
    overlay: false,
    compress: true,
    historyApiFallback: true,
    stats: "errors-warnings"
  },
  performance: false
};
