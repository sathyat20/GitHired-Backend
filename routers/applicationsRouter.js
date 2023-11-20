const express = require("express");
const router = express.Router();

class ApplicationsRouter {
  constructor(applicationsController) {
    this.controller = applicationsController;
  }

  routes = () => {
    router.get("/", this.controller.test);
    router.post("/create", this.controller.createOne);
    router.put("/edit/:applicationId", this.controller.updateOne);
    router.delete("/delete/:applicationId", this.controller.deleteOne);
    return router;
  };
}

module.exports = ApplicationsRouter;
