"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserGame.hasOne(models.UserProfile, {
        foreignKey: "userGameId",
        as: "profile",
      });
      UserGame.hasMany(models.UserHistory, {
        foreignKey: "userId",
        as: "history",
      });
    }
  }
  UserGame.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserGame",
    }
  );
  return UserGame;
};
