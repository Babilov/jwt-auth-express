const { DataTypes } = require("sequelize");
const db = require("../db.js");
const Post = require("./Post.js");
const Like = require("./Like.js");
const Comment = require("./Comment.js");

const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileDescription: {
    type: DataTypes.STRING,
    defaultValue: "",
    allowNull: true,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
  },
});

User.hasMany(Post, { as: "Posts" });
User.hasMany(Comment, { as: "comments" });

User.belongsToMany(User, {
  as: "Subscribers",
  through: "Subscriptions", // добавить s, так как имя таблицы во множественном числе
  foreignKey: "subscribeeId",
  otherKey: "subscriberId",
});

User.belongsToMany(User, {
  as: "Subscribees",
  through: "Subscriptions",
  foreignKey: "subscriberId",
  otherKey: "subscribeeId",
});

User.hasMany(Like, {
  as: "Likes",
});

module.exports = User;
