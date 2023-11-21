const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplicationsNotes extends Model {
    static associate(models) {
      // 1-M Applications - Notes
      ApplicationsNotes.belongsTo(models.application);
    }
  }

  ApplicationsNotes.init(
    {
      applicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "application",
          key: "id",
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "applicationNote",
      timestamps: true,
      underscored: true,
    }
  );
  return ApplicationsNotes;
};
