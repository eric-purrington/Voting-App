const mailer = require("nodemailer");
const { Welcome } = require("./welcome_template");
const { Events } = require("./events_template");

require("dotenv").config();
const MAILEREMAIL = process.env.MAILEREMAIL;
const MAILERPASSWORD = process.env.MAILERPASSWORD;

const getEmailData = (to, template) => {
  let data = null;

  switch (template) {
    case "welcome":
      data = {
        from: "Vote Goat Team <votegoatmail@gmail.com>",
        to,
        subject: `Welcome Voter!`,
        html: Welcome()
      }
      break;

    case "events":
      data = {
        from: "Vote Goat Team <votegoatmail@gmail.com>",
        to,
        subject: `You have saved events!`,
        html: Events()
      }
      break;
    
    default:
      data;
  }
  return data;
}

const sendEmail = (to, type) => {
  const smtpTransport = mailer.createTransport({
    service: "gmail",
    auth: {
      user: MAILEREMAIL,
      pass: MAILERPASSWORD
    }
  })

  const mail = getEmailData(to, type)

  smtpTransport.sendMail(mail, function(error, response) {
    if(error) {
      console.log(error)
    } else {
      console.log("Email sent successfully")
    }
    smtpTransport.close();
  })
}

module.exports = { sendEmail }