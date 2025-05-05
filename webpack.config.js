const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { Component } = require("react");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === "production";
const analyzeBundle = process.env.ANALYZE === "true";

module.exports = {
  mode: isProduction ? "production" : "development",
  cache: false, // Disable cache
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // Use [name] in dev filename to avoid conflicts
    filename: isProduction ? "[name].[contenthash:8].js" : "[name].bundle.js",
    chunkFilename: isProduction
      ? "[name].[contenthash:8].chunk.js"
      : "[name].chunk.js",
    publicPath: "/",
    clean: true, // Replaces CleanWebpackPlugin in Webpack 5
  },
  devtool: isProduction ? "source-map" : "cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true, // Important for single-page apps using React Router
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
        // Rule for images and other assets
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/media/[name].[hash][ext]",
        },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(), // Not needed with output.clean: true
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: true,
    }),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: "static/css/[name].[contenthash:8].css",
        chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
      }),
    // Add Bundle Analyzer plugin conditionally
    analyzeBundle && new BundleAnalyzerPlugin(),
    // Add other plugins like DefinePlugin if needed for environment variables
  ].filter(Boolean),
  optimization: {
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    removeAvailableModules: false,
    removeEmptyChunks: false,
    usedExports: true,
    sideEffects: true,
    // concatenateModules: true,
    // occurrenceOrder: true,
    flagIncludedChunks: true,
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 500000,
      maxAsyncRequests: 12,
      maxInitialRequests: 12,
      cacheGroups: {
        default: false,
        // Example: Splitting vendor code
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          reuseExistingChunk: true,
          enforce: true,
          priority: 20,
        },
        Components: {
          // Correctly target the src/Components directory
          test: /[\\/]src[\\/]Components[\\/]/,
          name: "components", // Use lowercase for consistency maybe
          chunks: "all",
          reuseExistingChunk: true,
          priority: 10, // Add priority to ensure it overrides vendor if needed
          enforce: true, // Ensure this group is always created
        },
        // Example: Splitting specific large components or pages if needed
        // page1: {
        //   test: /[\\/]src[\\/]pages[\\/]Page1/,
        //   name: 'page1',
        //   chunks: 'all',
        //   priority: 10,
        //   enforce: true,
        // },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
  performance: isProduction ? { hints: "warning" } : false,
  stats: "minimal", // Reduce console output noise
};
