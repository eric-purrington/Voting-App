const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../../models/user");
const userRoutes = require("./users");

// User routes
router.use("/users", userRoutes);

router.get('/', function (req, res) {
  res.render('index', { user : req.user });
});

router.get('/signup', function(req, res) {
  res.render('signup', { });
});

router.post('/sigup', function(req, res) {
  User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
          return res.render('signup', { account : account });
      }

      passport.authenticate('local')(req, res, function () {
          res.redirect('/');
      });
  });
});

router.get('/login', function(req, res) {
  res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

module.exports = router;

module.exports = router;