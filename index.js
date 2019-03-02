const winstone = require("winston");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const server = app.listen(port, () =>
  winstone.info(`Listing on port ${port}...`)
);

module.exports = server;
