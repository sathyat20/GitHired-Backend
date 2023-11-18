const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    static associate(models) {
      // 1-M Users-Contacts
      Contacts.belongsTo(models.user, { foreignKey: "userId" });
      // M-M appplications-contact
      Contacts.belongsToMany(models.applications, {
        through: models.XREFApplicationContact,
      });
      Contacts.hasmany(models.XREFApplicationContact);
    }
  }

  Contacts.init(
    {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      contactName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      notes: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastContactedDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "contact",
      timestamps: true,
      underscored: true,
    }
  );
  return Contacts;
};
