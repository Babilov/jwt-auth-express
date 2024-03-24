const User = require("../models/User.js");

const getUser = async (username) => {
  return await User.findOne({ where: { username } });
};

module.exports = getUser;
