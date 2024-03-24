const Role = require("../models/Role.js");

class RoleController {
  async CreateRole(req, res) {
    const role = req.body.role;
    const roleExist = await Role.findOne({ where: { name: role } });
    if (roleExist) {
      return res.status(403).send({ error: "Такая роль уже есть" });
    }
    try {
      const role = await Role.create({ name: role });
      return res.status(200).send(role);
    } catch (e) {
      return res.status(500).send({ error: "Ошибка сервера" });
    }
  }

  async getAllRoles(req, res) {
    try {
      const roles = await Role.findAll();
      return res.status(200).send(roles);
    } catch (e) {
      return res.status(500).send({ error: "Ошибка сервера" });
    }
  }
}

module.exports = new RoleController();
