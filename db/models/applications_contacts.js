const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplicationsContacts extends Model {
    static associate(models) {
      ApplicationsContacts.belongsTo(models.application);
      ApplicationsContacts.belongsTo(models.contact);
    }
  }

  ApplicationsContacts.init(
    {
      contactId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "contact",
          key: "id",
        },
      },
      applicationId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "application",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "ApplicationContact",
      timestamps: true,
      underscored: true,
    }
  );
  return ApplicationsContacts;
};
