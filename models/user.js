const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String, 
    required: true, 
    unique: true 
  },
  email_is_verified: {
    type: Boolean,
    default: false
  },
  password: {
    type: String
  },
  zip: { 
    type: Number, 
    required: true 
  },
  pollingAddress: [String],
  repDetails: [{
    repName: {
      type: String
    },
    repEmail: {
      type: String
    }
  }],
  electionDay: [ 
    {
    type: String
    }
  ]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;