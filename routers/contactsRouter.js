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
    router.post(
      "/create",
      this.verifyToken,
      this.contractsController.createOne
    );
    router.put("/edit/:id", this.verifyToken, this.contractsController.editOne);
    router.delete(
      "/delete/:id",
      this.verifyToken,
      this.contractsController.deleteOne
    );
    return router;
  };
}

module.exports = ContactsRouter;
