const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String, 
    required: true, 
    unique: true 
  },
  username: { 
    type: String, 
    required: true,
    unique: true 
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
    type: Date
    }
  ]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;