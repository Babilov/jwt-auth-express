const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const userUtils = require("../utils/UserUtils.js");
const roleUtils = require("../utils/RoleUtils.js");
const errors = require("../utils/consts/errorConsts.js");
const roles = require("../utils/consts/rolesConsts.js");

const ROLE_USER = roles.USER;
const SECKRET_KEY = process.env.SECKRET_KEY;

class UserController {
  async register(req, res) {
    const username = req.body.username;
    const password = await bcrypt.hash(req.body.password, 5);
    const userRole = await roleUtils.getRole(ROLE_USER);
    const user = await userUtils.getUserByUsername(username);
    if (user) {
      return res.status(403).send({ error: errors.ERROR_USER_EXISTS });
    }
    try {
      const user = await User.create({
        username,
        password,
        RoleId: userRole.id,
      });
      return res.status(201).send(user);
    } catch (e) {
      res.status(500).send({ error: errors.ERROR_SERVER });
    }
  }

  async login(req, res) {
    const { username, password } = req.body; // получить из json
    const user = await userUtils.getUserByUsername(username); // юзер из базы данных, если такой есть
    if (!user) {
      return res.status(401).send({ error: errors.ERROR_NO_SUCH_USER });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        const RoleId = user.RoleId;
        const id = user.id;
        const token = jwt.sign({ id, username, RoleId }, SECKRET_KEY, {
          expiresIn: "24h",
        });
        return res.status(200).send({ token });
      } else {
        return res.status(403).send({ error: errors.ERROR_WRONG_PASSWORD });
      }
    } catch (e) {
      return res.status(500).send({ error: errors.ERROR_SERVER });
    }
  }
}

module.exports = new UserController();
