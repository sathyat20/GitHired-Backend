const express = require('express');
const router = express.Router()

class UserRouter{
  constructor(userController){
    this.userController = userController;
  }

  routes=() => {
    router.get("/", this.userController.test);
    router.get("/base", this.userController.baseMethod);
    router.get("/all", this.userController.getAll);
    router.get(
      "/:userId/applications",
      this.userController.getUserApplications
    ); // route for getting a user's applications
    router.post("/newUser", this.userController.createOne);
    router.get(
      "/:userId/applications/status/:statusId",
      this.userController.getApplicationsByStatus
    );
    router.get("/:id", this.userController.getOne);


    return router;
  }
}

module.exports = UserRouter;