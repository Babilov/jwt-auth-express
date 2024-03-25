const User = require("../models/User.js");
class UserUtils {
  async getUserByUsername(username) {
    return await User.findOne({ where: { username } });
  }

  async getUserById(id) {
    return await User.findOne({ where: { id } });
  }

  checkAdmin(user) {
    if (!user || user.RoleId !== 2) {
      return false;
    }
    return true;
  }
}

module.exports = new UserUtils();
