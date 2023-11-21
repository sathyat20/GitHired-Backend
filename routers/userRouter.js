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

    router.get(
      "/:userId/:applicationId/notes",
      this.userController.getUserNotes
    );
    // GET - Retrieve a single application by a user (Can be moved to application to retrieve one application only - user not needed)
    // router.get(
    //   "/:userId/:applicationId",
    //   this.userController.getOneUserApplication
    // );
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
