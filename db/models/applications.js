const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Applications extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      Applications.belongsTo(models.user)
      Applications.belongsTo(models.applicationStatus, {foreignKey: "statusId"})
      Applications.hasMany(models.applicationReminder)
      Applications.hasMany(models.applicationDocument)
      Applications.hasMany(models.applicationInterviewPrep)
    }
  }

  Applications.init(
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      jobPosition: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      statusId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "applicationStatus",
          key: "id",
        },
      },
      isBookmarked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      jobDescription: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      applicationDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "application",
      timestamps: true,
      underscored: true,
    }
  );
  return Applications;
};
