const BaseController = require("./baseController");

class QuestionsController extends BaseController {
  constructor(
    questionModel,
    questionCategoryModel,
    questionDifficultyModel,
    questionLanguageModel,
    questionPlatformModel,
    questionStatusModel
  ) {
    super(questionModel);
    this.questionCategoryModel = questionCategoryModel;
    this.questionDifficultyModel = questionDifficultyModel;
    this.questionLanguageModel = questionLanguageModel;
    this.questionPlatformModel = questionPlatformModel;
    this.questionStatusModel = questionStatusModel;
  }

  // To create a new question
  createOne = async (req, res) => {
    const user = req.auth;

    const {
      title,
      link,
      categoryId,
      difficultyId,
      statusId,
      platformId,
      notes,
      starred,
      dateAttempted,
      dateSolved,
    } = req.body;

    //input validation

    if (!title || !link || !categoryId || !difficultyId || !statusId) {
      return res
        .status(400)
        .json({ success: false, msg: "Please ensure all inputs are in" });
    }
    try {
      console.log("body:", req.body);
      const newQuestion = await this.model.create({
        userId: user.userId,
        title,
        link,
        categoryId,
        difficultyId,
        statusId,
        platformId,
        notes,
        starred,
        dateAttempted,
        dateSolved,
      });
      return res.json({ success: true, question: newQuestion });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  };

  createCategory = async (req, res) => {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res
        .status(400)
        .json({ success: false, msg: "Category name is required" });
    }

    try {
      const newCategory = await this.questionCategoryModel.create({
        categoryName,
      });
      return res.json({ success: true, category: newCategory });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err.message });
    }
  };

  getAllCategoriesWithQuestions = async (req, res) => {
    const user = req.auth;
    try {
      const categories = await this.questionCategoryModel.findAll({});
      const questions = await this.model.findAll({
        where: { userId: user.userId },
        include: this.questionCategoryModel,
      });
      return res.json({ success: true, data: questions, categories });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
    }
  };

  getCategories = async (req, res) => {
    try {
      const categories = await this.questionCategoryModel.findAll({});
      return res.json({ success: true, categories });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
    }
  };
}

module.exports = QuestionsController;
