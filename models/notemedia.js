"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class noteMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Note }) {
      // define association here
      this.belongsTo(Note, { foreignKey: "noteId" });
    }
  }
  noteMedia.init(
    {
      media: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      type: DataTypes.STRING,
      noteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "NoteMedia",
      tableName: "noteMedia",
    }
  );
  return noteMedia;
};
