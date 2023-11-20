const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplicationsStatus extends Model {
    static associate(models) {
      ApplicationsStatus.hasMany(models.application, {
        foreignKey: "statusId",
      });
    }
  }

  ApplicationsStatus.init(
    {
      status: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "applicationStatus",
      timestamps: false,
      underscored: true,
      tableName: "application_status",
    }
  );
  return ApplicationsStatus;
};
