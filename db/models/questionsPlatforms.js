const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class QuestionsPlatforms extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      QuestionsPlatforms.hasMany(models.question, {
        foreignKey: "platform_id",
      });
    }
  }

  QuestionsPlatforms.init(
    {
      platform: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "questionPlatform",
      underscored: true,
      tableName: "questions_platform",
    }
  );
  return QuestionsPlatforms;
};
