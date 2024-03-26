const userUtils = require("../../utils/UserUtils.js");
const commentUtils = require("../../utils/CommentUtils.js");
const errors = require("../../utils/consts/errorConsts.js");
const ApiError = require("../../error/ApiError.js");

const isCommetAuthorOrAdminMidleware = async (req, res, next) => {
  const { id } = req.user; // id пользователя, отправившего запрос
  const { commentId } = req.params;
  const user = await userUtils.getUserById(id);
  try {
    const comment = await commentUtils.getCommentById(commentId);
    if (!comment) {
      throw ApiError.notFound(errors.ERROR_NO_SUCH_COMMENT);
    }
    if (comment.UserId === id || user.RoleId === 2) {
      req.comment = comment;
      return next();
    }
    throw ApiError.forbidden(errors.ERROR_NOT_COMMENT_OWNER);
  } catch (e) {
    return next(e);
  }
};

module.exports = isCommetAuthorOrAdminMidleware;
