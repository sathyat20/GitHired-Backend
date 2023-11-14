const BaseController = require("./baseController");

class UserController extends BaseController {
  constructor(userModel, applicationsModel, applicationStatusModel) {
    super(userModel);
    this.applicationsModel = applicationsModel;
    this.applicationStatusModel = applicationStatusModel;
  }

  test = (req, res) => {
    // Things to do: Connect to db, third party API calls, calculations, etc
    return res.send("I am in my User Controller");
  };

  createOne = async (req, res) => {
    const { email, firstName, lastName, username, password, profilePic } =
      req.body;
    //input validation

    if (
      !email ||
      !firstName ||
      !lastName ||
      !username ||
      !password ||
      !profilePic
    ) {
      return res
        .status(400)
        .json({ sucess: false, msg: "Please ensure all inputs are in" });
    }
    try {
      console.log("body:", req.body);
      const newUser = await this.model.create({
        email,
        firstName,
        lastName,
        username,
        password,
        profilePic,
      });

      return res.json({ success: true, user: newUser });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  getUserApplications = async (req, res) => {
    const { userId } = req.params;

    try {
      const userWithApplications = await this.model.findOne({
        where: { id: userId },
        include: [
          {
            model: this.applicationsModel,
            include: this.applicationStatusModel,
          },
        ],
      });

      if (!userWithApplications) {
        return res.status(404).json({ success: false, msg: "User not found" });
      }

      return res.json({
        success: true,
        applications: userWithApplications.applications,
      });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
    }
  };

  // To retrieve job applications for each user based on status_id

  getApplicationsByStatus = async (req, res) => {
    const { userId, statusId } = req.params;

    try {
      const userWithFilteredApplications = await this.model.findOne({
        where: { id : userId },
        include: [
          {
            model: this.applicationsModel,
            where: {statusId: statusId},
            include: [this.applicationStatusModel]
          }
        ],
      });

      if (!userWithFilteredApplications || !userWithFilteredApplications.applications.length) {
        return res
          .status(404)
          .json({ success: false, msg: "No applications found for that status for the user or user doesnt exist" });
      }

      return res.json({ success: true, applications: userWithFilteredApplications.applications });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
    }
  };
}

module.exports = UserController;
