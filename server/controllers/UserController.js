const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// const uuid = require("uuid");
// const path = require("path");
const User = require("../models/User.js");
const userUtils = require("../utils/UserUtils.js");
const roleUtils = require("../utils/RoleUtils.js");
const errors = require("../utils/consts/errorConsts.js");
const roles = require("../utils/consts/rolesConsts.js");
const ApiError = require("../error/ApiError.js");

const ROLE_USER = roles.USER;
const SECRET_KEY = process.env.SECRET_KEY;

class UserController {
  async register(req, res) {
    const { username } = req.body;
    // const { avatar } = req.files;
    // let fileName = uuid.v4() + ".jpg";
    // avatar.mv(path.resolve(__dirname, "..", "static", fileName));
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
        //  avatar: fileName,
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
      return res.status(404).send({ error: errors.ERROR_NO_SUCH_USER });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        const RoleId = user.RoleId;
        const id = user.id;
        const avatar = user.avatar;
        const token = jwt.sign({ id, username, RoleId, avatar }, SECRET_KEY, {
          expiresIn: "24h",
        });
        return res.status(200).send({ token, id });
      } else {
        return res.status(403).send({ error: errors.ERROR_WRONG_PASSWORD });
      }
    } catch (e) {
      return res.status(500).send({ error: errors.ERROR_SERVER });
    }
  }

  async getUser(req, res) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return ApiError.unauthorized({ error: errors.ERROR_NOT_AUTHED });
      }
      const userData = {
        id: decoded.id,
        username: decoded.username,
        avatar: decoded.avatar,
      };
      return res.status(200).send(userData);
    });
  }

  async setProfileDescription(req, res) {
    const { user } = req;
    const { description } = req.body;
    try {
      const changedDescription = await user.update({ description });
      return res.status(200).send({ changedDescription });
    } catch (e) {
      return ApiError.internal({ error: errors.ERROR_SERVER });
    }
  }

  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findOne({ where: { id } });
      console.log(user);
      return res.status(200).send(user);
    } catch (e) {
      return ApiError.badRequest({ error: errors.ERROR_NO_SUCH_USER });
    }
  }
}

module.exports = new UserController();
