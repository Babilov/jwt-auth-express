const { DataTypes } = require("sequelize");
const db = require("../db.js");

const Comment = db.define("Comment", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Comment;
