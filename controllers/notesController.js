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
        .json({ success: false, msg: "Pleas ensure all inputs are in" });
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

  // To update an existing application PUT /applications/:applicationId
  editOneNote = async (req, res) => {
    const { notesId } = req.params;
    const updateData = req.body;

    try {
      const note = await this.model.findByPk(notesId);

      if (!note) {
        return res.status(404).json({ success: false, msg: "Note not found" });
      }

      const updatedApplication = await note.update(updateData);

      return res.json({ success: true, application: updatedApplication });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
    }
  };
}

module.exports = NotesController;
