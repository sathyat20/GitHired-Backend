const express = require("express");
const router = express.Router();

class QuestionsRouter {
  constructor(questionsController, verifyToken) {
    this.questionsController = questionsController;
    this.verifyToken = verifyToken;
  }

  routes = () => {
    router.get("/", this.questionsController.test);
    router.get(
      "/categories",
      this.verifyToken,
      this.questionsController.getCategories
    );
    router.post(
      "/create",
      this.verifyToken,
      this.questionsController.createOne
    );
    router.put(
      "/edit/:questionId",
      this.verifyToken,
      this.questionsController.updateOne
    );
    router.post(
      "/newCategory",
      this.verifyToken,
      this.questionsController.createCategory
    );
    router.get(
      "/getAllQuestions",
      this.verifyToken,
      this.questionsController.getAllCategoriesWithQuestions
    );
    router.get("/:id", this.verifyToken, this.questionsController.getOne);

    return router;
  };
}

module.exports = QuestionsRouter;
