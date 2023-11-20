const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class QuestionsDifficulty extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      QuestionsDifficulty.hasMany(models.question, {
        foreignKey: "difficulty_id",
      });
    }
  }

  QuestionsDifficulty.init(
    {
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "questionDifficulty",
      underscored: true,
      tableName: "questions_difficulty",
    }
  );
  return QuestionsDifficulty;
};
