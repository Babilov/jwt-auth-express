const { DataTypes, Sequelize } = require("sequelize");
const db = require("../db.js");

const Comment = db.define("Comment", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    get() {
      return this.getDataValue("createdAt").toLocaleString("ru-RU");
    },
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    get() {
      return this.getDataValue("updatedAt").toLocaleString("ru-RU");
    },
  },
});

module.exports = Comment;
