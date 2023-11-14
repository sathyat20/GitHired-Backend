const express = require("express");
const router = express.Router();

class ApplicationsRouter {
  constructor(applicationsController) {
    this.controller = applicationsController;
  }

  routes = () => {
    router.get("/", this.controller.test);
    router.post("/newApplication", this.controller.createOne);
    router.get(
      "/status/:statusId",
      this.controller.getApplicationsByStatus
    );

    return router;
  };
}

module.exports = ApplicationsRouter;
