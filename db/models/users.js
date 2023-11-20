const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      Users.hasMany(models.application, { foreignKey: "userId" });
    }
  }

  Users.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profilePic: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      applicationGoalCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      questionsGoalCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "user",
      timestamps: true,
      underscored: true,
    }
  );
  return Users;
};
