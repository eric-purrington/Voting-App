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

  homeAddress: {
    type: String,
    required: true
  },

  pollingAddress: [{
    Name: {
      type: String
    },
    Address: {
      type: String
    },
    Hours: {
      type: String
    }
  }],

  repDetails: [{
    Name: {
      type: String
    },
    Email: {
      type: String
    },
    Phone: {
      type: String
    },
    Title: {
      type: String
    },
    Party: {
      type: String
    }
  }],

  savedEvents: [{
    Name: {
      type: String
    },
    Date: {
      type: String
    }
  }]

});


const User = mongoose.model("User", userSchema);

module.exports = User;