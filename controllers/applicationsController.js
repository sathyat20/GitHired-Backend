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
    const {
      userId,
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

    if (!userId || !statusId || !jobPosition) {
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
        isBookmarked,
        jobDescription,
        applicationDate,
      });
      return res.json({ success: true, application: newApplication });
    } catch (err) {
      return res.status(400).json({ success: false, msg: "This is broken" });
    }
  };

  // To update an existing application PUT /applications/:applicationId
  updateOneApplication = async (req, res) => {
    const { applicationId } = req.params;
    const updateData = req.body;

    try {
      const application = await this.model.findByPk(applicationId);

      if (!application) {
        return res
          .status(404)
          .json({ success: false, msg: "Application not found" });
      }

      const updatedApplication = await application.update(updateData);

      return res.json({ success: true, application: updatedApplication });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
    }
  };
}

module.exports = ApplicationsController;
