"use strict";
const router = require("express").Router();
router.get("/", (req, res, next) => {
  // res.send("<h1> Hello express "+req.hello+"</h1>");
  res.render("login");
});

module.exports = {
  router: router,
};
