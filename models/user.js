"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Note }) {
      // define association here
      this.hasMany(Note, { foreignKey: "userId" });
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pic: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return user;
};
