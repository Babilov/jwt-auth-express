const { DataTypes } = require("sequelize");
const db = require("../db.js");
const Post = require("./Post.js");

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
});

User.hasMany(Post);

User.belongsToMany(User, {
  as: "Subscribers",
  through: "Subscription",
  foreignKey: "subscribeeId",
  otherKey: "subscriberId",
});

User.belongsToMany(User, {
  as: "Subscribees",
  through: "Subscription",
  foreignKey: "subscriberId",
  otherKey: "subscribeeId",
});

module.exports = User;
