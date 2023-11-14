const express = require("express");
const router = express.Router();

class UserRouter {
  constructor(userController) {
    this.userController = userController;
  }

  routes = () => {
    router.get("/", this.userController.test);
    router.get("/base", this.userController.baseMethod);
    router.get("/all", this.userController.getAll);
    router.get("/:id", this.userController.getOne);
    router.get(
      "/:userId/applications",
      this.userController.getUserApplications
    ); // route for getting a user's applications
    router.get(
      "/:userId/:applicationId",
      this.userController.getOneUserApplication
    ); // route for getting a single application for a user
    router.post("/newUser", this.userController.createOne);
    return router;
  };
}

module.exports = UserRouter;
