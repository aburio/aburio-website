const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

module.exports = {
  mode: "production",

  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        index: {
          import: "src/views/pages/index.hbs", // => dist/index.html
          data: "src/views/pages/indexData.js",
        },
      },
      minify: "true",
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
        filename: "js/[name].js",
      },
      css: {
        // output filename of extracted CSS
        filename: "css/[name].css",
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
          filename: "assets/img/[name][ext]",
        },
      },
      {
        test: /\.(mp4)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/video/[name][ext]",
        },
      },
      {
        test: /\.(pdf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/pdf/[name][ext]",
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
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};
