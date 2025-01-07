const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./assets/scripts/pages/homeScript.js",
    blogs: "./assets/scripts/pages/blogsScript.js",
    contact: "./assets/scripts/pages/contactScript.js",
    news: "./assets/scripts/pages/newsScript.js",
    podcasts: "./assets/scripts/pages/podcastsScript.js",
    resources: "./assets/scripts/pages/resourcesScript.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext][query]",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
  performance: {
    hints: false,
    maxAssetSize: 2 * 1024 * 1024,
    maxEntrypointSize: 2 * 1024 * 1024,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/blogs.html",
      chunks: ["blogs"],
      filename: "blogs.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      chunks: ["contact"],
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/news.html",
      chunks: ["news"],
      filename: "news.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/podcasts.html",
      chunks: ["podcasts"],
      filename: "podcasts.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/resources.html",
      chunks: ["resources"],
      filename: "resources.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets",
          to: "assets",
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  mode: "production",
};
