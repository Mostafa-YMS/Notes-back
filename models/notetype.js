"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class noteType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Note }) {
      // define association here
      this.hasMany(Note, { foreignKey: "typeId" });
    }
    toJSON() {
      return { ...this.get(), note: undefined };
    }
  }
  noteType.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      disabled: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "NoteType",
      tableName: "noteTypes",
    }
  );
  return noteType;
};
