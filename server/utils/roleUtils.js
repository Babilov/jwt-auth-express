const Role = require("../models/Role.js");

const getRole = async (role) => {
  return Role.findOne({ where: { name: role } });
};

module.exports = getRole;
