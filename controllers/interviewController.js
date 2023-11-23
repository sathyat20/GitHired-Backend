const BaseController = require("./baseController");

class InterviewController extends BaseController {
  constructor(interviewModel) {
    super(interviewModel);
  }

  createOneInterview = async (req, res) => {
    const { applicationId, title, content } = req.body;
    if (!applicationId || !title || !content) {
      return res
        .status(400)
        .json({
          success: false,
          msg: "Interview - Please ensure all inputs are in",
        });
    }
    try {
      const newInterview = await this.model.create({
        applicationId,
        title,
        content,
      });
      return res.json({ success: true, data: newInterview });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, msg: "Unable to create interview" });
    }
  };
}

module.exports = InterviewController;
