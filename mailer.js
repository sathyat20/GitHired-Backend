const sendGridMailer = require("@sendgrid/mail");
sendGridMailer.setApiKey(process.env.SENDGRID_API_KEY);

function sendSignUpEmail({ email, token }) {
  return sendGridMailer
    .send({
      to: email,
      from: process.env.FROM_EMAIL,
      subject: "GitHired: Onboarding Time! 🧑🏻‍💻",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; text-align: center;">Welcome to GitHired!</h1>
          <p style="font-size: 16px; color: #555; text-align: center;">
            Thanks for signing up. Click below to finish the registration process.
          </p>
          <div style="text-align: center; margin-top: 20px;">
            <a 
              href="${process.env.FRONTEND_URL}/onboarding?token=${token}"
              style="display: inline-block; padding: 12px 20px; background-color: #4285f4; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;"
            >
              Onboarding
            </a>
          </div>
        </div>`,
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
      subject: "GitHired: Your Magic Link is here! 🪄",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; text-align: center;">Welcome back to GitHired!</h1>
          <p style="font-size: 16px; color: #555; text-align: center;">
            Click the magic link below to finish log in.
          </p>
          <div style="text-align: center; margin-top: 20px;">
            <a 
              href="${process.env.FRONTEND_URL}/dashboard?token=${token}"
              style="display: inline-block; padding: 12px 20px; background-color: #4285f4; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;"
            >
              Log In
            </a>
          </div>
        </div>`,
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
  sendSignInEmail,
};
