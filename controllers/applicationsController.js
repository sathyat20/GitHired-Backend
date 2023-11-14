// const { application } = require('express');
const BaseController = require("./baseController");

class ApplicationsController extends BaseController {
  constructor(applicationsModel, statusModel, remindersModel) {
    super(applicationsModel);
    this.statusModel = statusModel;
    this.remindersModel = remindersModel;
  }

  test = (req, res) => {
    return res.send("I am in my Applications Controller");
  };

  // To create a new application
  createOne = async (req, res) => {
    const { userId, jobPosition, color, companyName, location, statusId, is_bookmarked, jobDescription, applicationDate } =
      req.body;
    //input validation

    if (
      !userId ||
      !statusId ||
      !jobPosition ||
      !is_bookmarked
    ) {
      return res
        .status(400)
        .json({ success: false, msg: "Please ensure all inputs are in" });
    }
    try {
      console.log("body:", req.body);
      const newApplication = await this.model.create({
        userId,
        jobPosition,
        color,
        companyName,
        location,
        statusId,
        is_bookmarked,
        jobDescription,
        applicationDate,
      });
      return res.json({ success: true, application: newApplication });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  // To retrieve job applications based on status_id
  // Eg. localhost:8080/applications/status/2
  
  getApplicationsByStatus = async (req, res) => {
    const { statusId } = req.params;

    try {
      const applications = await this.model.findAll({
        where: { statusId: statusId },
        include: [this.statusModel],
      });

      if (!applications.length) {
        return res
          .status(404)
          .json({ success: false, msg: "No applications found for status" });
      }

      return res.json({ success: true, applications: applications });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
    }
  };
}

module.exports = ApplicationsController;
