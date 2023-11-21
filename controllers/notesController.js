const BaseController = require("./baseController");

class NotesController extends BaseController {
  constructor(notesModel) {
    super(notesModel);
  }

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
