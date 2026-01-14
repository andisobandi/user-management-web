/* eslint-disable no-console */
const webpack = require("webpack");

const config = require("../webpack.config.prod");

console.log("\x1b[34mBuilding... \x1b[0m");

webpack(config).run((error, stats) => {
  if (error) {
    console.error("\x1b[31mBuild failed!\x1b[0m");
    console.error(error.stack || error);
    if (error.details) {
      console.error(error.details);
    }
    process.exit(1);
  }

  const info = stats.toString({
    colors: true,
    version: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    errors: true,
    warnings: true,
    orphanModules: true,
    moduleAssets: true,
    builtAt: true,
    timings: true,
  });

  console.log(info);

  if (stats.hasErrors()) {
    console.error("\x1b[31mCompiled with errors.\x1b[0m");
    process.exit(1);
  } else {
    console.log("\x1b[32mCompiled successfully!\x1b[0m");
  }
});
