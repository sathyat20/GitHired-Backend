// const { application } = require('express');
const BaseController = require("./baseController");

class ApplicationsController extends BaseController {
  constructor(applicationsModel, statusModel, remindersModel) {
    super(applicationsModel);
    this.statusModel = statusModel;
    this.remindersModel = remindersModel;
  }

  // To create a new application POST /applications/create
  createOneApplication = async (req, res) => {
    const user = req.auth; // Pull user id from middleware

    const {
      jobPosition,
      color,
      companyName,
      location,
      statusId,
      isBookmarked,
      jobDescription,
      applicationDate,
    } = req.body;

    //input validation
    if (!statusId || !jobPosition) {
      return res
        .status(400)
        .json({ success: false, msg: "Please ensure all inputs are in" });
    }
    try {
      const newApplication = await this.model.create({
        userId: user.userId,
        jobPosition,
        color,
        companyName,
        location,
        statusId,
        isBookmarked,
        jobDescription,
        applicationDate,
      });
      return res.json({ success: true, application: newApplication });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, msg: "Unable to create application" });
    }
  };
}

module.exports = ApplicationsController;
