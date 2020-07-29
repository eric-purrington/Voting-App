const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/votegoat"
  );

  const userSeed = [
    {
      email: "sam@gmail.com",
      password: "password123",
      zip: "98112",
    },
    {
      email: "sally@aol.com",
      password: "1234567",
      zip: "98105",
      pollingAddress: ["123 Main St., Seattle, WA, 98105"],
      repDetails: [{
        repName: "Obama",
        repEmail: "obama@obama.biz"
      }],
      electionDay: ""
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