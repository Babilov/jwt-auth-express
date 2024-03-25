const Role = require("../models/Role.js");
class RoleUtils {
  async getRole(role) {
    return Role.findOne({ where: { name: role } });
  }
}
module.exports = new RoleUtils();
