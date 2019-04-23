const debug = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./js/client.js",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/core", "@babel/preset-env"]
            }
          }
        ]
      }
    ]
  },
  output: {
    path: `${__dirname}/src/`,
    filename: "client.min.js"
  },
  plugins: debug
    ? []
    : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
      ]
};
