const User = require("../models/User.js");
const errors = require("./consts/errorConsts.js");

class UserUtils {
  async getUserByUsername(username) {
    return await User.findOne({ where: { username } });
  }

  async getUserById(id) {
    return await User.findOne({ where: { id } });
  }

  async isUser(res, id) {
    if (!(await this.getUserById(id))) {
      return res.status(404).send({ error: errors.ERROR_NO_SUCH_USER });
    }
  }

  checkAdmin(user) {
    if (!user || user.RoleId !== 2) {
      return false;
    }
    return true;
  }
}

module.exports = new UserUtils();
