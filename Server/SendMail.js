require("dotenv").config();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

bodyParser.urlencoded({ extended: true });
bodyParser.json();

const transport = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.PORT,
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.USER_PASS,
  },
});

await transport.sendMail({
  from: process.env.MAIL_FROM,
  to: "grvy.wav@gmail.com",
  subject: "test mail",
  html: `<div>
  <h1>Test Mail</h1>
  </div`,
});
