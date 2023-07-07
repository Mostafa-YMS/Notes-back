"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class noteReceivers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Note, User }) {
      // define association here
      this.belongsTo(Note, { foreignKey: "id", as: "note" });
      this.belongsTo(User, { foreignKey: "id", as: "user" });
    }
    toJSON() {
      return { ...this.get()?.note?.dataValues };
    }
  }
  noteReceivers.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      noteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "notes",
          },
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "NoteReceivers",
      tableName: "noteReceivers",
      timestamps: false,
    }
  );
  return noteReceivers;
};