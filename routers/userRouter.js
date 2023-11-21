const express = require("express");
const router = express.Router();

class UserRouter {
  constructor(userController, verifyToken) {
    this.userController = userController;
    this.verifyToken = verifyToken;
  }

  routes = () => {
    router.get("/", this.userController.test);
    router.get("/all", this.userController.getAll);
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
    // POST - Create a new user
    router.post("/newUser", this.userController.createOne);
    // GET - Retrieve a user's applications filtered by status
    router.get(
      "/:userId/applications/status/:statusId",
      this.userController.getApplicationsByStatus
    );
    router.get("/:id", this.userController.getOne);

    return router;
  };
}

module.exports = UserRouter;
