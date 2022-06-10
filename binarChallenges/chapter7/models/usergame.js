"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    static async register({ username, password }) {
      const encryptedPassword = await bcrypt.hash(password, 10);

      return this.create({ username, password: encryptedPassword });
    }

    static async authenticate({ username, password }) {
      try {
        const user = await this.findOne({ where: { username } });
        if (!user) return Promise.reject("User Not Found!");
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return Promise.reject("Wrong password!");
        return Promise.resolve(user);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    generateToken() {
      // Jangan masukkan password ke payload
      const payload = {
        id: this.id,
        username: this.username,
      };
      // rahasia ini nanti kita pakai untuk  untuk memverifikasi apakah token ini berasal dari aplikasi kita
      const rahasia = "Tugasnya sulit banget";
      // Membuat token dari data diatas
      const token = jwt.sign(payload, rahasia);
      return token;
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
