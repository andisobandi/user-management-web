/* eslint-disable no-console */
const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const history = require("connect-history-api-fallback");
require("dotenv").config();

const webpackConfig = require("../webpack.config.dev");

const compiler = webpack(webpackConfig);
const app = express();
const PORT = process.env.APP_PORT || 4010;
const APP_MODE = process.env.APP_MODE || "development";

app.use(history());
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, "../src")));

app.listen(PORT, () => {
  console.log("\x1b[36m%s\x1b[0m", "--------------------------------------------------");
  console.log(`🚀 APP_MODE: ${APP_MODE}`);
  console.log(`📦 Webpack running in ${APP_MODE} mode`);
  console.log(`🌐 Application running at: http://localhost:${PORT}/`);
  console.log("\x1b[36m%s\x1b[0m", "--------------------------------------------------");
});
