const BaseController = require("./baseController");

class UserController extends BaseController {
  constructor(userModel, applicationsModel, applicationStatusModel) {
    super(userModel);
    this.applicationsModel = applicationsModel;
    this.applicationStatusModel = applicationStatusModel;
  }

  // Create new user via the route /user/newUser
  createOne = async (req, res) => {
    const { email, firstName, lastName, profilePic } = req.body;
    //input validation

    if (!email || !firstName || !lastName) {
      return res
        .status(400)
        .json({ success: false, msg: "Please ensure all inputs are in" });
    }
    try {
      console.log("body:", req.body);
      const newUser = await this.model.create({
        email,
        firstName,
        lastName,
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
        return res
          .status(404)
          .json({ success: false, msg: "User/Application not found" });
      }

      return res.json({
        success: true,
        applications: userWithApplications.applications,
      });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
    }
  };

  getOneUserApplication = async (req, res) => {
    const { userId, applicationId } = req.params;

    try {
      // Find all applications data matching userId
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

      const applicationIdToFind = parseInt(applicationId);

      // Filter the required application id
      const foundApplication = userWithApplications.applications.find(
        (app) => app.id === applicationIdToFind
      );

      if (!foundApplication) {
        return res
          .status(404)
          .json({ success: false, msg: "Application not found" });
      }

      return res.json({
        success: true,
        application: foundApplication,
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
        where: { id: userId },
        include: [
          {
            model: this.applicationsModel,
            where: { statusId: statusId },
            include: [this.applicationStatusModel],
          },
        ],
      });

      if (
        !userWithFilteredApplications ||
        !userWithFilteredApplications.applications.length
      ) {
        return res.status(404).json({
          success: false,
          msg: "No applications found for that status for the user or user doesnt exist",
        });
      }

      return res.json({
        success: true,
        applications: userWithFilteredApplications.applications,
      });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
    }
  };
}

module.exports = UserController;
