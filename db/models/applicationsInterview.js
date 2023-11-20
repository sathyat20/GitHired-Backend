const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplicationsInterview extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      ApplicationsInterview.belongsTo(models.application);
    }
  }

  ApplicationsInterview.init(
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
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "applicationInterview",
      timestamps: true,
      underscored: true,
      tableName: "applications_interview",
    }
  );
  return ApplicationsInterview;
};
