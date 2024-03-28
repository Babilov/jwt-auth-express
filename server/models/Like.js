const { DataTypes } = require("sequelize");
const db = require("../db.js");

const Like = db.define("Like", {
  entity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  entity_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Like;
