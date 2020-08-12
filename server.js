const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://"+process.env.dbUser+":"+process.env.dbPassword+"@ds141950.mlab.com:41950/heroku_tktjc2j0",

  // "mongodb://localhost/votegoat"

  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
);

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
