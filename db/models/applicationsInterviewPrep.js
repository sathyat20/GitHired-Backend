const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplicationsInterviewPrep extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      ApplicationsInterviewPrep.belongsTo(models.application);
    }
  }

  ApplicationsInterviewPrep.init(
    {
      applicationsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "application",
          key: "id",
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    },
    {
      sequelize,
      modelName: "applicationInterviewPrep",
      timestamps: true,
      underscored: true,
      tableName: "applications_interview_prep",
    }
  );
  return ApplicationsInterviewPrep;
};
