const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Users extends Model {
    //create our associations

    static associate(models) {
      //create associations in here
      Users.hasMany(models.application)
    }
  }

  Users.init({
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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePic: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'user',
    timestamps: true,
    underscored: true
  });
  return Users;
}