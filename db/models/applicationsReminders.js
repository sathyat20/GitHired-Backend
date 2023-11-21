const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplicationsReminders extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      ApplicationsReminders.belongsTo(models.application);
    }
  }

  ApplicationsReminders.init(
    {
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "application",
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
      modelName: "applicationReminder",
      timestamps: true,
      underscored: true,
    }
  );
  return ApplicationsReminders;
};
