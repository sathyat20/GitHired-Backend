const express = require("express");
const router = express.Router();

class ContactsRouter {
  constructor(contactsController) {
    this.contractsController = contactsController;
  }

  routes = () => {
    router.get("/", this.contractsController.test);
    router.get("/:id", this.contractsController.getOne); // Unable to work
    router.get("/all", this.contractsController.getAll);
    router.post("/create", this.contractsController.createOne);
    // router.put("/edit/:applicationId", this.controller.updateOne);
    router.delete("/delete/:id", this.contractsController.deleteOne); // Issue with XREF table
    return router;
  };
}

module.exports = ContactsRouter;
