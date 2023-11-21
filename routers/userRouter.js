const express = require("express");
const router = express.Router();

class UserRouter {
  constructor(userController, verifyToken) {
    this.userController = userController;
    this.verifyToken = verifyToken;
  }

  routes = () => {
    router.get("/", this.userController.test);
    router.get("/data", this.verifyToken, this.userController.getOneUser);

    // Retrieve all applications from a user
    router.get(
      "/applications",
      this.verifyToken,
      this.userController.getUserApplications
    );

    // Retrieve all notes from a user
    router.get(
      "/:applicationId/notes",
      this.verifyToken,
      this.userController.getUserNotes
    );
    // Retrieve all interviews from a user
    router.get(
      "/:applicationId/interviews",
      this.verifyToken,
      this.userController.getUserInterviews
    );

    router.post("/newUser", this.verifyToken, this.userController.createOne);

    return router;
  };
}

module.exports = UserRouter;
