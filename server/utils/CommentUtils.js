const Comment = require("../models/Comment.js");

class CommentUtils {
  async getCommentById(id) {
    return await Comment.findOne({ where: { id } });
  }
}

module.exports = new CommentUtils();
