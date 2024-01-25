const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

module.exports = {
  mode: "development",

  output: {
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        index: {
          import: "src/views/pages/index.hbs", // => dist/index.html
          data: "src/views/pages/indexData.js",
        },
      },
      preprocessor: "handlebars",
      // define handlebars options
      preprocessorOptions: {
        partials: ["src/views/partials"],
        helpers: {
          arraySize: (array) => array.length,
        },
      },
      js: {
        // output filename of compiled JavaScript
        filename: "js/[name].[contenthash:8].js",
      },
      css: {
        // output filename of extracted CSS
        filename: "css/[name].[contenthash:8].css",
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|webp|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[hash:8][ext]",
        },
      },
    ],
  },

  devServer: {
    static: path.resolve(__dirname, "dist"),
    watchFiles: {
      paths: ["src/**/*.*"],
      options: {
        usePolling: true,
      },
    },
  },
};
