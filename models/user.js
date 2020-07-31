const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  zip: { 
    type: Number, 
    required: true 
  },
  pollingAddress: {
    type : [String],
    required: true,
  },
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

const User = mongoose.model("User", userSchema);

module.exports = User;