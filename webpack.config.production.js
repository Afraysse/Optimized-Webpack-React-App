const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // webpack configuration goes here
  mode: "production",
  entry: {
    vendor: ["semantic-ui-react"],
    app: "./src/index.js"
  },
  output: {
    // create the JS bundles under a 'static' directory
    filename: "static/[name].[hash].js",
    // absolute path to the desired output directory ('dist')
    // '__dirname' is a Node var that gives the abs path to our current directory.
    // 'path.resolve' joins the directories
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  // changing to prod source maps
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node-modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        // configure 'Extract Text Plugin'
        use: ExtractTextPlugin.extract({
          // loader that should be used when CSS is not extracted
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              // PostCSS will run before css-loader and will minify and autoprefix CSS rules
              loader: "postcss-loader"
            }
          ]
        })
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),

    // Create the stylesheet under 'styles' directory
    new ExtractTextPlugin({
      filename: "styles/styles.[hash].css",
      allChunks: true
    })
  ]
};
