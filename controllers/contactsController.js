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

  test = (req, res) => {
    return res.send("I am in my Contacts Controller");
  };

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

  // To update an existing application PUT /applications/:applicationId
  // updateOne = async (req, res) => {
  //   const { applicationId } = req.params;
  //   const updateData = req.body;

  //   try {
  //     const application = await this.model.findByPk(applicationId);

  //     if (!application) {
  //       return res
  //         .status(404)
  //         .json({ success: false, msg: "Application not found" });
  //     }

  //     const updatedApplication = await application.update(updateData);

  //     return res.json({ success: true, application: updatedApplication });
  //   } catch (err) {
  //     return res.status(500).json({ success: false, msg: err.message });
  //   }
  // };

  // Delete one application DELETE /applications/delete/:applicationId
  // deleteOne = async (req, res) => {
  //   const { applicationId } = req.params;

  //   try {
  //     const application = await this.model.findByPk(applicationId);
  //     if (!application) {
  //       return res
  //         .status(404)
  //         .json({ success: false, msg: "Application not found" });
  //     }
  //     await application.destroy();

  //     return res.json({ success: true, msg: "Application Deleted" });
  //   } catch (err) {
  //     return res.status(500).json({ success: false, msg: err.message });
  //   }
  // };
}

module.exports = ContactsController;
