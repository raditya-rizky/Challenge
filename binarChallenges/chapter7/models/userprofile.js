"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProfile.belongsTo(models.UserGame, {
        foreignKey: "userGameId",
        as: "user",
      });
    }
  }
  UserProfile.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.TEXT,
      dateOfBirth: DataTypes.DATEONLY,
      userGameId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserProfile",
    }
  );
  return UserProfile;
};
