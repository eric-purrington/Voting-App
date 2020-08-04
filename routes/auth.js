const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/login", 
  passport.authenticate("local", { 
      successRedirect: "/dashboard", 
      failureRedirect: "/login", 
      failureFlash: false })
);

module.exports = router;