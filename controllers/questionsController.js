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

  test = (req, res) => {
    return res.send("I am in my Questions Controller");
  };

  // To create a new question
  createOne = async (req, res) => {
    const {
      userId,
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

    if (
      !userId ||
      !title ||
      !link ||
      !categoryId ||
      !difficultyId ||
      !statusId ||
      !starred
    ) {
      return res
        .status(400)
        .json({ success: false, msg: "Please ensure all inputs are in" });
    }
    try {
      console.log("body:", req.body);
      const newQuestion = await this.model.create({
        userId,
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

  // To update an existing question
  updateOne = async (req, res) => {
    const { questionId } = req.params;
    const updateData = req.body;

    try {
      const question = await this.model.findByPk(questionId);

      if (!question) {
        return res
          .status(404)
          .json({ success: false, msg: "Question not found" });
      }

      const updatedQuestion = await question.update(updateData);

      return res.json({ success: true, question: updatedQuestion });
    } catch (err) {
      return res.status(500).json({ success: false, msg: err.message });
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

  createQuestionInCategory = async (req, res) => {
    const { categoryName, questionData } = req.body;

    try {
      // Find or create the category
      const [category] = await this.questionCategoryModel.findOrCreate(
        {
          where: { categoryName: categoryName },
          defaults: { categoryName: categoryName },
        }
      );

      // Now create the question with the categoryId
      const newQuestion = await this.model.create({
        ...questionData,
        categoryId: category.id,
      });

      return res.json({ success: true, question: newQuestion });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err.message });
    }
  };
}

module.exports = QuestionsController;
