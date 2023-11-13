// const { application } = require('express');
const BaseController = require('./baseController')

class ApplicationsController extends BaseController {
  constructor(applicationsModel, statusModel, remindersModel) {
    super(applicationsModel);
    this.statusModel = statusModel;
    this.remindersModel = remindersModel;
  }

  test = (req, res) => {
    return res.send("I am in my Applications Controller");
  };

  createOne = async (req, res) => {
    const { userId, jobPosition, color, companyName, location, statusId, isBookmarked, jobDescription, applicationDate } =
      req.body;
    //input validation

    if (
      !userId ||
      !statusId ||
      !jobPosition ||
      !isBookmarked
    ) {
      return res
        .status(400)
        .json({ sucess: false, msg: "Please ensure all inputs are in" });
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
      return res.status(400).json({ success: false, msg: err });
    }
  };
}

module.exports = ApplicationsController;
