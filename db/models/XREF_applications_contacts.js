const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class XREFApplicationsContacts extends Model {
    static associate(models) {
      XREFApplicationsContacts.belongsTo(models.application);
      XREFApplicationsContacts.belongsTo(models.contact);
    }
  }

  XREFApplicationsContacts.init(
    {
      contactsId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "contact",
          key: "id",
        },
      },
      applicationsId: {
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
      modelName: "XREFApplicationContact",
      timestamps: true,
      underscored: true,
    }
  );
  return XREFApplicationsContacts;
};
