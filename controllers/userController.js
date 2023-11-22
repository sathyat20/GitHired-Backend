const BaseController = require("./baseController");
const jwt = require("jsonwebtoken");

class UserController extends BaseController {
  constructor(
    userModel,
    applicationsModel,
    applicationStatusModel,
    applicationNoteModel,
    applicationInterviewModel,
    applicationReminderModel,
    questionModel,
    contactsModel
  ) {
    super(userModel);
    this.questionModel = questionModel;
    this.applicationsModel = applicationsModel;
    this.applicationStatusModel = applicationStatusModel;
    this.applicationNoteModel = applicationNoteModel;
    this.applicationInterviewModel = applicationInterviewModel;
    this.applicationReminderModel = applicationReminderModel;
    this.contactsModel = contactsModel;
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
      const token = jwt.sign(
        { userId: newUser.id, email: newUser.email }, // Add userId and email to JWT body
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      return res.json({ success: true, newUser, token });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  getOneUser = async (req, res) => {
    const user = req.auth;
    try {
      const userData = await this.model.findByPk(user.userId);

      if (!userData) {
        return res.status(404).json({ success: false, msg: "User not found" });
      }
      return res.json({
        success: true,
        userData,
      });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
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

  getUserQuestions = async (req, res) => {
    // Get user data from middleware
    const user = req.auth;

    try {
      const userWithQuestions = await this.questionModel.findAll({
        where: { userId: user.userId },
      });

      if (!userWithQuestions) {
        return res
          .status(404)
          .json({ success: false, msg: "User/Questions not found" });
      }

      return res.json({
        success: true,
        questions: userWithQuestions,
      });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
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

  getUserContacts = async (req, res) => {
    const user = req.auth;

    const { applicationId } = req.params;
    try {
      const userApplicationContacts = await this.contactsModel.findAll({
        include: [
          {
            model: this.applicationsModel,
            where: {
              id: applicationId, // Filter by the specific applicationId
              userId: user.userId, // Filter by the specific userId in applications
            },
            through: {
              attributes: [], // To exclude through table attributes from the result
            },
          },
        ],

        order: [["updatedAt", "DESC"]], // Sort by updatedAt in descending order
      });

      return res.json({
        success: true,
        contacts: userApplicationContacts,
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
