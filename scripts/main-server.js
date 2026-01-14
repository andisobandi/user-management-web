/* eslint-disable no-console */
const express = require("express");
const path = require("path");
const expressStaticGzip = require("express-static-gzip");
const history = require("connect-history-api-fallback");
require("dotenv").config();

const app = express();
const PORT = process.env.APP_PORT || 4010;
const APP_MODE = process.env.APP_MODE || "production";

app.use(history());
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use("/", expressStaticGzip(path.resolve(__dirname, "../dist")));

app.listen(PORT, () => {
  console.log("\x1b[32m%s\x1b[0m", "--------------------------------------------------");
  console.log(`🚀 APP_MODE: ${APP_MODE}`);
  console.log(`🌐 Application running at: http://localhost:${PORT}/`);
  console.log("\x1b[32m%s\x1b[0m", "--------------------------------------------------");
});
