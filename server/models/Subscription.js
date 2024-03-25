const { DataTypes } = require("sequelize");
const db = require("../db.js");

const Subscription = db.define("Subscription", {
  subscribeeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subscriberId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Subscription;
