const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      Questions.hasMany(models.questionLanguage);
      Questions.belongsTo(models.questionCategory, {
        foreignKey: "category_id",
      });
      Questions.belongsTo(models.questionDifficulty, {
        foreignKey: "difficulty_id",
      });
      Questions.belongsTo(models.questionStatus, {
        foreignKey: "status_id",
      });
      Questions.belongsTo(models.questionPlatform, {
        foreignKey: "platform_id",
      });
    }
  }

  Questions.init(
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
          model: "questionCategory",
          key: "id",
        },
      },
      difficultyId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "questionDifficulty",
          key: "id",
        },
      },
      statusId: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
          model: "questionStatus",
          key: "id",
        },
      },
      platformId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "questionPlatform",
          key: "id",
        },
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateAttempted: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateSolved: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      starred: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "question",
      timestamps: true,
      underscored: true,
      tableName: "questions",
    }
  );
  return Questions;
};
