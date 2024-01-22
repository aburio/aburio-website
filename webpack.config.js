"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const TerserJSPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        mimetype: "image/svg+xml",
        scheme: "data",
        type: "asset/resource",
        generator: {
          filename: "icons/[hash].svg",
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./src",
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Arthur Burnichon - Product Maker",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/robots/",
          to: "",
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/favicon/",
          to: "",
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/media",
          to: "assets",
        },
      ],
    }),
  ],
};
