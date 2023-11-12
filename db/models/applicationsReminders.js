const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplicationsReminders extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      ApplicationsReminders.belongsTo(models.applications)
    }
  }

  ApplicationsReminders.init(
    {
      applicationsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "applications",
          key: "id",
        },
      },
      reminderDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      reminderNote: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "applicationsReminders",
      timestamps: true,
      underscored: true,
    }
  );
  return ApplicationsReminders;
};
