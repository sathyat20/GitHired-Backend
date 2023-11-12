const BaseController = require("./baseController");

class UserController extends BaseController {
  constructor(model) {
    super(model);
  }

  test = (req, res) => {
    // Things to do: Connect to db, third party API calls, calculations, etc
    return res.send("I am in my User Controller");
  };

  createOne = async (req, res) => {
    const { email, firstName, lastName, username, password, profilePic } =
      req.body;
      //input validation

      if (!email || !firstName || !lastName || !username || !password || !profilePic) {
        return res.status(400).json({sucess: false, msg: "Please ensure all inputs are in"
        })
      }
      try{
        console.log("body:", req.body)
        const newUser = await this.model.create({
      email,
      firstName,
      lastName,
      username,
      password,
      profilePic,
    });
    return res.json({ success: true, user: newUser });}
    catch (err) {
      return res.status(400).json({success: false, msg: err})
    }
  };
}

module.exports = UserController;
