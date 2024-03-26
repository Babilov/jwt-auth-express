const postUtils = require("../../utils/PostUtils.js");
const userUtils = require("../../utils/UserUtils.js");
const errors = require("../../utils/consts/errorConsts.js");
const ApiError = require("../../error/ApiError.js");

const isPostOwnerMidleware = async (req, res, next) => {
  const { postId } = req.query;
  const post = await postUtils.getPost(postId);
  if (userUtils.checkAdmin(req.user) || post["UserId"] === req.user.id) {
    return next();
  }
  return next(ApiError.forbidden(errors.ERROR_WRONG_USER));
};

module.exports = isPostOwnerMidleware;
