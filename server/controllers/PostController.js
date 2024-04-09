const User = require("../models/User.js");
const Post = require("../models/Post.js");
const errors = require("../utils/consts/errorConsts.js");
const roles = require("../utils/consts/rolesConsts.js");
const userUtils = require("../utils/UserUtils.js");
const postUtils = require("../utils/PostUtils.js");
const conditions = require("../utils/Conditions.js");

class PostController {
  async createPost(req, res) {
    const UserId = req.user.id;
    const content = req.body.content; // получаем контент поста
    await userUtils.isUser(res, UserId);
    try {
      const post = await Post.create({ content, UserId });
      res.status(200).send(post);
    } catch (e) {
      return res.status(500).send({ error: errors.ERROR_SERVER });
    }
  }

  async getPosts(req, res) {
    /*
    const UserId = req.query.user; // получаем id пользователя
    const postId = req.query.postId; // получаем id поста
    let posts;
    let whereCondition = conditions.buildWhereCondition(UserId, postId); */
    const UserId = req.query.id;

    try {
      const posts = await Post.findAll({ where: { UserId } });
      res.status(200).send(posts);
    } catch (e) {
      res.status(500).send(errors.ERROR_SERVER);
    }
  }

  async updatePost(req, res) {
    const { content } = req.body;
    const { postId } = req.query;
    try {
      const post = await postUtils.getPost(postId);
      const newPost = await post.update({ content });
      return res.status(200).send(newPost);
    } catch (e) {
      return res.status(500).send({ error: errors.ERROR_SERVER });
    }
  }

  async deletePost(req, res) {
    const { postId } = req.query;
    const post = await postUtils.getPost(postId);
    try {
      await post.destroy();
      return res.status(200).send({ deleted: post });
    } catch (e) {
      return res.status(500).send({ error: errors.ERROR_SERVER });
    }
  }
}
module.exports = new PostController();
