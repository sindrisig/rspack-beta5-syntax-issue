const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "production",
  entry: {
    main: "./src/index.jsx",
  },
  experiments: {
    css: true,
  },
  resolve: {
    extensions: ["...", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
              transform: {
                react: {
                  runtime: "automatic",
                },
              },
            },
          },
        },
        type: "javascript/auto",
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: "asset/resource",
      },
    ],
  },
  optimization: {
    minimize: false, // Disabling minification because it takes too long on CI
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
module.exports = config;
