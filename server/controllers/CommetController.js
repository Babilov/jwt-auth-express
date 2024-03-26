const Comment = require("../models/Comment.js");
const ApiError = require("../error/ApiError.js");
const postUtils = require("../utils/PostUtils.js");
const commentUtils = require("../utils/CommentUtils.js");
const errors = require("../utils/consts/errorConsts.js");

class CommentController {
  async createComment(req, res, next) {
    const { postId } = req.query; // id поста
    const UserId = req.user.id; // id пользователя, который комментирует
    const { content } = req.body;
    try {
      const comment = await Comment.create({
        content,
        UserId,
        PostId: postId,
      });
      return res.status(200).send({ comment });
    } catch (e) {
      return next(ApiError.internal());
    }
  }

  async getCommentsOfPost(req, res, next) {
    const { postId } = req.query;
    try {
      const post = await postUtils.getPost(postId);
      if (post) {
        return res.status(200).send({ comments: await post.getComments() });
      }
      throw ApiError.notFound(errors.ERROR_NO_SUCH_POST);
    } catch (e) {
      return next(e);
    }
  }

  async getCommetById(req, res, next) {
    const { commentId } = req.params;
    try {
      const comment = await commentUtils.getCommentById(commentId);
      if (comment) {
        return res.status(200).send(comment);
      }
      throw ApiError.notFound(errors.ERROR_NO_SUCH_COMMENT);
    } catch (e) {
      return next(e);
    }
  }

  async updateCommentById(req, res, next) {
    const { commentId } = req.params;
    const { content } = req.body;
    try {
      const { comment } = req;
      const new_comment = await comment.update({ content });
      return res.status(200).send({ new_comment });
    } catch (e) {
      return next(ApiError.notFound(errors.ERROR_NO_SUCH_COMMENT));
    }
  }

  async deleteCommentById(req, res, next) {
    const { comment } = req;
    try {
      await comment.destroy();
      return res.status(200).send({ comment });
    } catch (e) {
      return next(ApiError.notFound(errors.ERROR_NO_SUCH_COMMENT));
    }
  }
}

module.exports = new CommentController();
