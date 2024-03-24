require("dotenv").config();
const Sequelize = require("sequelize");

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_port = process.env.DB_PORT;
const db_dialect = process.env.DB_DIALECT;
const host = process.env.HOST;

module.exports = new Sequelize(db_name, db_user, db_password, {
  host,
  port: db_port,
  dialect: db_dialect,
  timezone: "+03:00",
});
