const BaseController = require("./baseController");
const jwt = require("jsonwebtoken");
const { sendSignInEmail, sendSignUpEmail } = require("../mailer");

class AuthController extends BaseController {
  constructor(userModel) {
    super(userModel);
  }

  test = (req, res) => {
    // Things to do: Connect to db, third party API calls, calculations, etc
    return res.send("I am in my Auth Controller");
  };

  loginUser = async (req, res) => {
    const user = await this.model.findOne({ where: { email: req.body.email } });

    // New User (Sign Up) - Redirect to /onboarding after verification
    if (!user) {
      try {
        const token = jwt.sign(
          { email: req.body.email },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        await sendSignUpEmail({ email: req.body.email, token });
      } catch (e) {
        console.error("Login error:", e);
        return res.status(500).send("Error Signing Up, please try again.");
      }
    }

    // Existing User (Sign In) - Redirect to /dashboard after verification
    if (user != null) {
      try {
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        await sendSignInEmail({ email: user.email, token });
      } catch (e) {
        console.error("Login error:", e);
        return res.status(500).send("Error logging in, please try again.");
      }
    }

    res.send("Please check your email to finish logging in!");
  };

  retrieveEmailFromToken = async (req, res) => {
    const token = req.query.token;
    if (token == null) return res.sendStatus(401).send("No token submitted");
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded token is:", decodedToken);
      const email = decodedToken.email;
      res.send(email);
    } catch (e) {
      return res.status(400).json({ success: false, msg: "Invalid Token" });
    }
  };

  verifyUser = async (req, res) => {
    const token = req.query.token;
    if (token == null) return res.sendStatus(401).send("No token submitted");
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded token is:", decodedToken);
      const user = await this.model.findOne({
        where: { id: decodedToken.userId },
      });
      res.send(user);
    } catch (e) {
      console.error(e);
      return res.status(401).send(e.message);
    }
  };
}

module.exports = AuthController;
