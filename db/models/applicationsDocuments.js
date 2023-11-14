const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplicationsDocuments extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      ApplicationsDocuments.belongsTo(models.application);
    }
  }

  ApplicationsDocuments.init(
    {
      applicationsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "application",
          key: "id",
        },
      },
      documentType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      documentUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "applicationDocument",
      timestamps: true,
      underscored: true,
    }
  );
  return ApplicationsDocuments;
};
