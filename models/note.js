"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, NoteMedia, NoteType }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userId", as: "user" });
      this.hasMany(NoteMedia, { foreignKey: "noteId", as: "media" });
      this.belongsTo(NoteType, { foreignKey: "typeId", as: "type" });
    }
  }
  note.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Note",
      tableName: "notes",
    }
  );
  return note;
};
