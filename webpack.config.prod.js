const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const common = require("./webpack.config.common");

module.exports = merge(common, {
  entry: {
    main: [path.resolve(__dirname, "src/index.js")],
  },
  output: {
    filename: "[name].[contenthash:12].js",
  },
  mode: "production",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "css-[local]__[md4:hash:7]",
              },
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
        generator: {
          filename: "./assets/images/[name].[contenthash:12][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:12].css",
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.(js|css)$/,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      /**
       * For webpack@5 you can use the `...` syntax to
       * extend existing minimizers (i.e. `terser-webpack-plugin`)
       * */
      "...",
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["mozjpeg", { quality: 75 }],
              ["pngquant", { quality: [0.65, 0.9], speed: 4 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "removeViewBox",
                      active: false,
                    },
                    {
                      name: "addAttributesToSVGElement",
                      params: {
                        attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxSize: Infinity,
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `vendor.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
});
