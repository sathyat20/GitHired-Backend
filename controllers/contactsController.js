const BaseController = require("./baseController");

const { CREATED, BAD_REQUEST } = require("../constants/statusCodes");

const {
  CONTACT_CREATED_SUCCESS,
  MISSING_FIELDS,
  SUBMISSION_ERROR,
} = require("../constants/messages");

class ContactsController extends BaseController {
  constructor(contactModel) {
    super(contactModel);
  }

  // To create a new contact POST /contact/create
  createOne = async (req, res) => {
    const {
      userId,
      contactName,
      companyName,
      jobPosition,
      email,
      notes,
      phoneNumber,
      lastContactedDate,
    } = req.body;
    //input validation

    if (!userId || !contactName || !companyName || !jobPosition) {
      return res
        .status(BAD_REQUEST)
        .json({ success: false, msg: MISSING_FIELDS });
    }
    try {
      console.log("body:", req.body);
      const newContact = await this.model.create({
        userId,
        contactName,
        companyName,
        jobPosition,
        email,
        notes,
        phoneNumber,
        lastContactedDate,
      });
      return res.status(CREATED).json({
        success: true,
        msg: CONTACT_CREATED_SUCCESS,
        data: newContact,
      });
    } catch (err) {
      return res
        .status(BAD_REQUEST)
        .json({ success: false, msg: SUBMISSION_ERROR, errorDetails: err });
    }
  };

  getUserContacts = async (req, res) => {
    // Get user data from middleware
    const user = req.auth;

    try {
      const userContacts = await this.model.findAll({
        where: { userId: user.userId },
        order: [["updatedAt", "DESC"]], // Sort by updatedAt in descending order
      });

      if (!userContacts) {
        return res
          .status(404)
          .json({ success: false, msg: "Contacts not found" });
      }

      return res.json({
        success: true,
        contacts: userContacts,
      });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
    }
  };
}

module.exports = ContactsController;
