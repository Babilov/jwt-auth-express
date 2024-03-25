const User = require("../models/User.js");
class UserUtils {
  async getUserByUsername(username) {
    return await User.findOne({ where: { username } });
  }

  async getUserById(id) {
    return await User.findOne({ where: { id } });
  }
}

module.exports = new UserUtils();
