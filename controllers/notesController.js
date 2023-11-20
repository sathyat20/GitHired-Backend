const BaseController = require("./baseController");

class NotesController extends BaseController {
  constructor(notesModel) {
    super(notesModel);
  }

  // To update an existing application PUT /applications/:applicationId
  updateOne = async (req, res) => {
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

module.exports = NotesController;
