const BaseController = require("./baseController");
const { Op } = require("sequelize");

class RemindersController extends BaseController {
  constructor(reminderModel) {
    super(reminderModel);
  }

  getAllReminders = async (req, res) => {
    const currentDate = new Date(); // Get current date/time

    const output = await this.model.findAll({
      where: {
        reminderDate: {
          [Op.gte]: currentDate, // Filter for dates greater than or equal to the current date
        },
      },
      order: [["reminderDate", "ASC"]],
    });

    return res.json({ success: true, data: output });
  };

  createOneReminder = async (req, res) => {
    const { applicationId, reminderDate, reminderNote } = req.body;
    if (!reminderNote || !reminderDate) {
      return res.status(400).json({
        success: false,
        msg: "Reminders -Please ensure all inputs are in",
      });
    }
    try {
      const newReminder = await this.model.create({
        applicationId,
        reminderNote,
        reminderDate,
      });
      return res.json({ success: true, newReminder });
    } catch (err) {
      return res
        .status(400)
        .json({ success: false, msg: "Unable to create reminder" });
    }
  };
}

module.exports = RemindersController;
