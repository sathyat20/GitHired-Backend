const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplicationsStatus extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      ApplicationsStatus.hasMany(models.applications)
    }
  }

  ApplicationsStatus.init(
    {
      status: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "applicationsStatus",
      timestamps: true,
      underscored: true,
    }
  );
  return ApplicationsStatus;
};
