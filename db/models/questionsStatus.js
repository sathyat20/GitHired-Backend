const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class QuestionsStatus extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      QuestionsStatus.hasMany(models.question, {
        foreignKey: "status_id",
      });
    }
  }

  QuestionsStatus.init(
    {
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "questionStatus",
      underscored: true,
      tableName: "questions_status",
    }
  );
  return QuestionsStatus;
};
