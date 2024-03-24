const { DataTypes } = require("sequelize");
const User = require("./User.js");
const db = require("../db.js");

const Role = db.define("Role", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

Role.hasMany(User);

module.exports = Role;
