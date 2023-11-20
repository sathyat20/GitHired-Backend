const express = require("express");
const router = express.Router();

class QuestionsRouter {
  constructor(questionsController) {
    this.questionsController = questionsController;
  }

  routes = () => {
    router.get("/", this.questionsController.test);
    router.get("/base", this.questionsController.baseMethod);
    
    return router;
  };
}

module.exports = QuestionsRouter;
