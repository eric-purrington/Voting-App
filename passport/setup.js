const bcrypt = require("bcryptjs");
const User = require("../models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
   User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { message: "Incorrect email." });
        }
        if (!user.validPassword(password)) {
            return done (null, false, { message: "Incorrect password." });
        }
        return done(null, user);
      });
     }
  ));

    passport.serializeUser((user, done) =>
      done(null, user.id))
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
          if(err) {return done(err)}
          done(null, user)
        })
      })


module.exports = passport;