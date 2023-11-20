const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Applications extends Model {
    static associate(models) {
      // 1-M Users - Applications
      Applications.belongsTo(models.user, { foreignKey: "userId" });
      // 1-1 Applications - Status Id
      Applications.belongsTo(models.applicationStatus, {
        foreignKey: "statusId",
      });
      // 1-M Applications - Reminders, Documents, Interview, Notes
      Applications.hasMany(models.applicationNotes);
      Applications.hasMany(models.applicationReminder);
      Applications.hasMany(models.applicationDocument);
      Applications.hasMany(models.applicationInterview);
      // M-M appplications-contact
      Applications.belongsToMany(models.contact, {
        through: models.XREFApplicationContact,
      });
      Applications.hasMany(models.XREFApplicationContact);
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
