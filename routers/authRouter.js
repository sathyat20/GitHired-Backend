const express = require("express");
const router = express.Router();

class AuthRouter {
  constructor(authController) {
    this.authController = authController;
  }

  routes = () => {
    router.get("/", this.authController.test);
    router.post("/login", this.authController.loginUser);
    router.get("/retrieve-email", this.authController.retrieveEmailFromToken);
    router.get("/verify", this.authController.verifyUser);

    return router;
  };
}

module.exports = AuthRouter;
