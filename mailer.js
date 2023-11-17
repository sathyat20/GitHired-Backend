const sendGridMailer = require("@sendgrid/mail");
sendGridMailer.setApiKey(process.env.SENDGRID_API_KEY);

function sendSignUpEmail({ email, token }) {
  return sendGridMailer
    .send({
      to: email,
      from: process.env.FROM_EMAIL,
      subject: "GitHired: Onboarding Time! 🧑🏻‍💻",
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 25px; max-width: 800px; margin: 0 auto; background-color: #050b1e; color: white;">
        <!-- Logo -->
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://firebasestorage.googleapis.com/v0/b/githired-c0060.appspot.com/o/profile-images%2FGitHired.png?alt=media&token=38f945e7-0900-49c4-9cd7-d44b056edb4f" alt="GitHired Logo" style="max-width: 600px; height: auto;">
        </div>
        <!-- Heading and content -->
        <h1 style="color: white; text-align: center;">Welcome to GitHired!</h1>    
        <p style="font-size: 16px; color: white; text-align: center;">
          Thanks for signing up. Click below to finish the registration process.
        </p>
        <div style="text-align: center; margin-top: 20px;">
          <a 
            href="${process.env.FRONTEND_URL}/onboarding?token=${token}"
            style="display: inline-block; padding: 12px 20px; background-color: #1C3F58; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;"
          >
            Onboard
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
      html: ` 
      <div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 25px; max-width: 800px; margin: 0 auto; background-color: #050b1e; color: white;">
        <!-- Logo -->
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://firebasestorage.googleapis.com/v0/b/githired-c0060.appspot.com/o/profile-images%2FGitHired.png?alt=media&token=38f945e7-0900-49c4-9cd7-d44b056edb4f" alt="GitHired Logo" style="max-width: 600px; height: auto;">
        </div>
        <!-- Heading and content -->
        <h1 style="color: white; text-align: center;">Welcome back to GitHired!</h1>    
        <p style="font-size: 16px; color: white; text-align: center;">
          Click the magic link below to finish log in.
        </p>
        <div style="text-align: center; margin-top: 20px;">
          <a 
            href="${process.env.FRONTEND_URL}/dashboard?token=${token}"
            style="display: inline-block; padding: 12px 20px; background-color: #1C3F58; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;"
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
