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
    placeName: {
      type: String
    },
    placeAddress: {
      type: String
    }
  }],

  repDetails: [{
    repName: {
      type: String
    },
    repEmail: {
      type: String
    },
    repPhone: {
      type: String
    },
    repTitle: {
      type: String
    }
  }],

  savedEvents: [{
    eventName: {
      type: String
    },
    eventDate: {
      type: String
    }
  }],

});


const User = mongoose.model("User", userSchema);

module.exports = User;