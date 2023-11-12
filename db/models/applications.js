const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Applications extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      Applications.belongsTo(models.users)
      Applications.belongsTo(models.applicationsStatus)
      Applications.hasMany(models.applicationsReminders)
    }
  }

  Applications.init(
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "users",
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
          model: "applications_status",
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
      modelName: "applications",
      timestamps: true,
      underscored: true,
    }
  );
  return Applications;
};
