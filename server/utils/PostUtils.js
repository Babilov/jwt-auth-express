const Post = require("../models/Post.js");

class PostUtils {
  async getPost(id) {
    return await Post.findOne({
      where: { id },
      attributes: ["id", "content", "UserId"],
    });
  }
}

module.exports = new PostUtils();
