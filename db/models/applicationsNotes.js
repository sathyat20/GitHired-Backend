const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplicationsNotes extends Model {
    static associate(models) {
      ApplicationsNotes.belongsTo(models.application);
    }
  }

  ApplicationsNotes.init(
    {
      applicationsId: {
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
      modelName: "applicationNotes",
      timestamps: true,
      underscored: true,
      tableName: "applications_notes",
    }
  );
  return ApplicationsNotes;
};
