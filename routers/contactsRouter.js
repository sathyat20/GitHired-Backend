const express = require("express");
const router = express.Router();

class ContactsRouter {
  constructor(contactsController, verifyToken) {
    this.contractsController = contactsController;
    this.verifyToken = verifyToken;
  }

  routes = () => {
    router.get("/", this.verifyToken, this.contractsController.test);
    router.get(
      "/all",
      this.verifyToken,
      this.contractsController.getUserContacts
    );
    router.post("/create", this.contractsController.createOne);
    // router.put("/edit/:applicationId", this.controller.updateOne);
    router.delete("/delete/:id", this.contractsController.deleteOne); // Issue with XREF table
    return router;
  };
}

module.exports = ContactsRouter;
