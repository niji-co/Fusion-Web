const path = require("path");

const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-transform-runtime",
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread",
            "@babel/plugin-proposal-optional-chaining",
          ],
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
              plugins: [
                "@babel/plugin-transform-runtime",
                "@babel/proposal-class-properties",
                "@babel/proposal-object-rest-spread",
                "@babel/plugin-proposal-optional-chaining",
              ],
            },
          },
          "ts-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "actions": path.resolve(__dirname, "src/actions/"),
      "api": path.resolve(__dirname, "src/api/"),
      "components": path.resolve(__dirname, "src/components/"),
      "containers": path.resolve(__dirname, "src/containers/"),
      "dev": path.resolve(__dirname, "src/dev/"),
      "hooks": path.resolve(__dirname, "src/hooks/"),
      "layouts": path.resolve(__dirname, "src/layouts/"),
      "models": path.resolve(__dirname, "src/models/"),
      "pages": path.resolve(__dirname, "src/pages/"),
      "reducers": path.resolve(__dirname, "src/reducers/"),
    },
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".css"],
  },

  plugins: [
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],

  devServer: {
    compress: true,
    contentBase: path.join(__dirname, "public"),
    port: 8000,
	hot: true,
  },
};
