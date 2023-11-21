const BaseController = require("./baseController");

class NotesController extends BaseController {
  constructor(notesModel) {
    super(notesModel);
  }

  createOneNote = async (req, res) => {
    const { applicationId, title, content } = req.body;
    if (!applicationId || !title || !content) {
      return res
        .status(400)
        .json({ success: false, msg: "Please ensure all inputs are in" });
    }
    try {
      const newNote = await this.model.create({
        applicationId,
        title,
        content,
      });
      return res.json({ success: true, data: newNote });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, msg: "Unable to create note" });
    }
  };
}

module.exports = NotesController;
