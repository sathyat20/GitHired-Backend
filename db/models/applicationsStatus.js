const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplicationsStatus extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      ApplicationsStatus.hasMany(models.application, {foreignKey: "statusId"})
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
      tableName: "applications_status"
    }
  );
  return ApplicationsStatus;
};
