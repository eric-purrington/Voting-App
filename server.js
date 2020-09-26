const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const { sendEmail } = require("./nodemailer/mail");
// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3001;
const app = express();

// These are supposed to help nodemailer work, but I don't know if they are necessary
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser());

const { sendEmail } = require("./nodemailer/mail");

app.post("/api/sendMail", (req, res) => {
  console.log(req.body)
  sendEmail(req.body.email, "welcome")
})

app.post("/api/sendMail/savedevent", (req, res) => {
  console.log(req.body)
  sendEmail(req.body.email, "events")
})

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
