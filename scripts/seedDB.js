const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/votegoat"
);

const userSeed = [
  {
    email: "sam@gmail.com",
    password: "password123",
    homeAddress: "98112",
    repDetails: [
      {
        repName: "Official1",
        repEmail: "official1@gmail.com",
        repPhone: "555-555-5555",
        repTitle: "Official1"
      },
      {
        repName: "Official2",
        repEmail: "official2@gmail.com",
        repPhone: "555-555-5555",
        repTitle: "Official2"
      }
    ],
    savedEvents: [
      {
        eventName: "Watch Debate",
        eventDate: "2020-10-31"
      }
    ]
  },

  {
    email: "sally@aol.com",
    password: "1234567",
    homeAddress: "98112",
    repDetails: [
      {
        repName: "Official1",
        repEmail: "official1@gmail.com",
        repPhone: "555-555-5555",
        repTitle: "Official1"
      },
      {
        repName: "Official2",
        repEmail: "official2@gmail.com",
        repPhone: "555-555-5555",
        repTitle: "Official2"
      }
    ],
    savedEvents: [
      {
        eventName: "Watch Debate",
        eventDate: "2020-10-31"
      }
    ]
  }

];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });