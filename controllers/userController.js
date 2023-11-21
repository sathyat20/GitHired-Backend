const BaseController = require("./baseController");

class UserController extends BaseController {
  constructor(
    userModel,
    applicationsModel,
    applicationStatusModel,
    applicationNoteModel,
    applicationInterviewModel,
    applicationReminderModel
  ) {
    super(userModel);
    this.applicationsModel = applicationsModel;
    this.applicationStatusModel = applicationStatusModel;
    this.applicationNoteModel = applicationNoteModel;
    this.applicationInterviewModel = applicationInterviewModel;
    this.applicationReminderModel = applicationReminderModel;
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
    // Get user data from middleware
    const user = req.auth;

    try {
      const userWithApplications = await this.applicationsModel.findAll({
        where: { userId: user.userId },
        include: this.applicationStatusModel,
        order: [["updatedAt", "DESC"]], // Sort by updatedAt in descending order
      });

      if (!userWithApplications) {
        return res
          .status(404)
          .json({ success: false, msg: "User/Application not found" });
      }

      return res.json({
        success: true,
        applications: userWithApplications,
      });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
    }
  };

  getUserNotes = async (req, res) => {
    const user = req.auth;
    const { applicationId } = req.params;

    try {
      const userApplicationNotes = await this.applicationNoteModel.findAll({
        where: {
          applicationId: applicationId,
        },
        include: {
          model: this.applicationsModel,
          where: {
            userId: user.userId,
          },
        },
        order: [["updatedAt", "DESC"]], // Sort by updatedAt in descending order
      });

      return res.json({
        success: true,
        data: userApplicationNotes,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ success: false, msg: `Failed ${err.message}` });
    }
  };

  getUserInterviews = async (req, res) => {
    const user = req.auth;

    const { applicationId } = req.params;
    try {
      const userApplicationInterview =
        await this.applicationInterviewModel.findAll({
          where: {
            applicationId: applicationId,
          },
          include: {
            model: this.applicationsModel,
            where: {
              userId: user.userId,
            },
          },
          order: [["updatedAt", "DESC"]], // Sort by updatedAt in descending order
        });

      return res.json({
        success: true,
        data: userApplicationInterview,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ success: false, msg: `Failed ${err.message}` });
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
