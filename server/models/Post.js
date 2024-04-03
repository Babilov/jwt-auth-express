const { DataTypes, Sequelize } = require("sequelize");
const db = require("../db.js");
const Comment = require("./Comment.js");

const Post = db.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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

Post.hasMany(Comment, { as: "Comments" });

module.exports = Post;
