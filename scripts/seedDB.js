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
        name: "Official1",
        email: "official1@gmail.com",
        phone: "555-555-5555",
        title: "Official1",
        party: "Democrat"
      },
      {
        name: "Official2",
        email: "official2@gmail.com",
        phone: "555-555-5555",
        title: "Official2",
        party: "Republican"
      },
      {
        name: "Official3",
        email: "official3@gmail.com",
        phone: "555-555-5555",
        title: "Official3",
        party: "N"
      }
    ],
    savedEvents: [
      {
        name: "Watch Debate",
        date: "2020-10-31"
      }
    ]
  },

  {
    email: "sally@aol.com",
    password: "1234567",
    homeAddress: "98112",
    repDetails: [
      {
        name: "Official1",
        email: "official1@gmail.com",
        phone: "555-555-5555",
        title: "Official1"
      },
      {
        name: "Official2",
        email: "official2@gmail.com",
        phone: "555-555-5555",
        title: "Official2"
      }
    ],
    savedEvents: [
      {
        name: "Watch Debate",
        date: "8-31-2020"
      },
      {
        name: "Turn in Ballot",
        date: "8-3-2020"
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