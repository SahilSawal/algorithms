"use strict";
const express = require("express");
const app = express();
const ChatDog = require("./app");
app.set("port", process.env.PORT || 3000);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/", ChatDog.router);
app.listen(app.get("port"), () => {
  console.log("running on port:", 3000);
});
