const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Db connection
const db = require("./server/config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console(err));
const port = process.env.PORT || 3000;

app.listen(port, console.log(`runing at ${port}...`));
