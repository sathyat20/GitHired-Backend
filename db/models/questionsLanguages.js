const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class QuestionsLanguages extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      QuestionsLanguages.belongsTo(models.question, {
        foreignKey: "questions_id",
      });
    }
  }

  QuestionsLanguages.init(
    {
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "questionLanguage",
      underscored: true,
      tableName: "questions_languages",
    }
  );
  return QuestionsLanguages;
};
