const sendGridMailer = require("@sendgrid/mail")
sendGridMailer.setApiKey(process.env.SENDGRID_API_KEY)

function sendSignUpEmail({ email, token }) {
  return sendGridMailer
    .send({
      to: email,
      from: process.env.FROM_EMAIL,
      subject: "Finish Logging In",
      html: `<a href="http://localhost:3000/onboarding?token=${token}">Log In</a>`,
    })
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error("Error sending email:", error.response.body);
      throw error; 
    });
}

function sendSignInEmail({ email, token }) {
  return sendGridMailer
    .send({
      to: email,
      from: process.env.FROM_EMAIL,
      subject: "Finish Logging In",
      html: `<a href="http://localhost:3000/dashboard?token=${token}">Log In</a>`,
    })
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error("Error sending email:", error.response.body);
      throw error;
    });
}

module.exports = {
  sendSignUpEmail,
  sendSignInEmail
}

