const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class QuestionsCategories extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      QuestionsCategories.hasMany(models.question, {foreignKey: "category_id"});
    }
  }

  QuestionsCategories.init(
    {
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "questionCategory",
      underscored: true,
      tableName: "questions_category",
    }
  );
  return QuestionsCategories;
};
