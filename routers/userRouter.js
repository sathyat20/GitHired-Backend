const express = require("express");
const router = express.Router();

class UserRouter {
  constructor(userController) {
    this.userController = userController;
  }

  routes = () => {
    router.get("/", this.userController.test);
    router.get("/all", this.userController.getAll);
    // Retrieve all applications from a user
    router.get(
      "/:userId/applications",
      this.userController.getUserApplications
    );
    // Retrieve all notes from a user

    router.get(
      "/:userId/:applicationId/notes",
      this.userController.getUserNotes
    );
    // Retrieve all interviews from a user
    router.get(
      "/:userId/:applicationId/interviews",
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
