const express = require("express");
const router = express.Router();

class QuestionsRouter {
  constructor(questionsController) {
    this.questionsController = questionsController;
  }

  routes = () => {
    router.get("/", this.questionsController.test);
    router.get("/base", this.questionsController.baseMethod);
    router.post("/create", this.questionsController.createOne);
    router.put("/edit/:questionId", this.questionsController.updateOne);
    router.post("/newCategory", this.questionsController.createCategory);
    router.post("/questionInCategory", this.questionsController.createQuestionInCategory)
    router.get("/getAllQuestions", this.questionsController.getAllCategoriesWithQuestions)
    router.get("/all", this.questionsController.getAll)

    return router;
  };
}

module.exports = QuestionsRouter;
