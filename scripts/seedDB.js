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
        "name": "Official1",
        "email": "Official1@gmail.com",
        "phone": "555-555-5555",
        "title": "official1@gmail.com",
        "party": "democrat"
      },
      {
        "name": "Official2",
        "email": "Official2@gmail.com",
        "phone": "555-555-5555",
        "title": "official2@gmail.com",
        "party": "democrat"
      },
      {
        "name": "Official4",
        "email": "Official4@gmail.com",
        "phone": "555-555-5555",
        "title": "official4@gmail.com",
        "party": "democrat"
      },
      {
        "name": "Official3",
        "email": "Official3@gmail.com",
        "phone": "555-555-5555",
        "title": "official3@gmail.com",
        "party": "democrat"
      }
    ],
    savedEvents: [
      {
        name: "Watch Debate",
        date: "2020-10-31"
      }
    ],
    pollingAddress: [
      {
        "name": "Storey Gym",
        "address": "2810 House Avenue Cheyenne, WY 82001",
      },
      {
        "name": "North Christian Church",
        "address": "2015 Tranquility Road Cheyenne, WY 82009",
      },
      {
        "name": "Laramie Co Comm College",
        "address": "1400 East College Drive Cheyenne, WY 82007",
      },
      {
        "name": "Event Center At Archer",
        "address": "3801 Archer Parkway Cheyenne, WY 82007",
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