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
});

Post.hasMany(Comment, { as: "Comments" });

module.exports = Post;
