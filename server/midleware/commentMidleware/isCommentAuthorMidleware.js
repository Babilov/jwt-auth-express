const errors = require("../../utils/consts/errorConsts.js");
const User = require("../../models/User.js");
const commentUtils = require("../../utils/CommentUtils");
const ApiError = require("../../error/ApiError");

const isCommentAuthorMidleware = async (req, res, next) => {
  const { id } = req.user; // id пользователя, отправившего запрос
  const { commentId } = req.params;
  try {
    const comment = await commentUtils.getCommentById(commentId);
    if (!comment) {
      throw ApiError.notFound(errors.ERROR_NO_SUCH_COMMENT);
    }
    if (comment.UserId === id) {
      req.comment = comment;
      return next();
    }
    throw ApiError.forbidden(errors.ERROR_NOT_COMMENT_OWNER);
  } catch (e) {
    return next(e);
  }
};

module.exports = isCommentAuthorMidleware;
