const User = require("../models/User.js");
const Post = require("../models/Post.js");
const errors = require("../utils/consts/errorConsts.js");
const roles = require("../utils/consts/rolesConsts.js");
const userUtils = require("../utils/userUtils.js");

class PostController {
  async createPost(req, res) {
    const UserId = req.user.id;
    const content = req.body.content; // получаем контент поста
    const user = userUtils.getUserById(UserId);
    if (!user) {
      return res.status(401).send({ error: errors.ERROR_NO_SUCH_USER });
    }
    try {
      const post = await Post.create({ content, UserId });
      res.status(200).send(post);
    } catch (e) {
      return res.status(500).send({ error: errors.ERROR_SERVER });
    }
  }
}

module.exports = new PostController();
