"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GamePlay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GamePlay.belongsTo(models.UserGame, {
        foreignKey: "roomId",
        as: "gamePlay",
      });
    }
  }
  GamePlay.init(
    {
      player1: DataTypes.STRING,
      player2: DataTypes.STRING,
      roomId: DataTypes.INTEGER,
      result: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "GamePlay",
    }
  );
  return GamePlay;
};
