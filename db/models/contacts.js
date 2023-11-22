const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    static associate(models) {
      // 1-M Users-Contacts
      Contacts.belongsTo(models.user, { foreignKey: "userId" });
      // M-M appplications-contact
      Contacts.belongsToMany(models.application, {
        through: models.ApplicationContact,
      });
      Contacts.hasMany(models.ApplicationContact);
    }
  }

  Contacts.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      contactName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      jobPosition: {
        type: DataTypes.STRING,
        allowNull: true,
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
