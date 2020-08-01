const bcrypt = require("bcryptjs");
const User = require("../models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
        if(err) { return done(err) }

        if (!user) {
          return done(null, false, { message: "No user found with that email." 
        })
        }

        if (user.password != password) {
          return done(null, false, {
            message: "Incorrect password."
          })
        }

        return done(null, user)
      })
    }))

    passport.serializeUser((user, done) =>
      done(null, user.id))
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
          if(err) {return done(err)}
          done(null, user)
        })
      })
//     .then(user => {
//         // Create new User
//         if (!user) {
//             const newUser = new User({ email, password });
//             // Hash password before saving in database
//             bcrypt.genSalt(10, (err, salt) => {
//                 bcrypt.hash(newUser.password, salt, (err, hash) => {
//                     if (err) throw err;
//                     newUser.password = hash;
//                     newUser
//                         .save()
//                         .then(user => {
//                             return done(null, user);
//                         })
//                         .catch(err => {
//                             return done(null, false, { message: err });
//                         });
//                 });
//             });
//             // Return other user
//         } else {
//             // Match password
//             bcrypt.compare(password, user.password, (err, isMatch) => {
//                 if (err) throw err;

//                 if (isMatch) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false, { message: "Wrong password" });
//                 }
//             });
//         }
//     })
//     .catch(err => {
//         return done(null, false, { message: err });
//     });
// })
// );

module.exports = passport;