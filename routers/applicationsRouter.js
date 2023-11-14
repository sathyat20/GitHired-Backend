const express = require("express");
const router = express.Router();

class ApplicationsRouter {
  constructor(applicationsController) {
    this.controller = applicationsController;
  }

  routes = () => {
    router.get("/", this.controller.test);
    router.post("/newApplication", this.controller.createOne);
    router.put("/:applicationId", this.controller.updateOne);
    return router;
  };
}

module.exports = ApplicationsRouter;
