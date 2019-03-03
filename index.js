const express = require("express");
const mongoose = require("mongoose");

//api routers
const users = require("./server/routes/api/users");
const transanctions = require("./server/routes/api/transactions");
const profiles = require("./server/routes/api/profiles");

const app = express();

//Db connection
const db = require("./server/config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console(err));

//using the routes
app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/transactions", transanctions);
const port = process.env.PORT || 3000;

app.listen(port, console.log(`runing at ${port}...`));
