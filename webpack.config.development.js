const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  // webpack configuration goes here
  mode: "development",
  entry: {
    vendor: ["semantic-ui-react"],
    app: "./src/index.js"
  },
  output: {
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      // first rule
      {
        test: /\.(js)$/,
        exclude: /node-modules/,
        use: ["babel-loader"]
      },
      // second rule
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
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
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true
  }
};
