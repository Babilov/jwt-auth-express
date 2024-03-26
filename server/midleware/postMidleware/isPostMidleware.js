const postUtils = require("../../utils/PostUtils.js");
const errors = require("../../utils/consts/errorConsts.js");
const ApiError = require("../../error/ApiError.js");

const isPostMidleware = async (req, res, next) => {
  const { postId } = req.query;
  const post = await postUtils.getPost(postId);
  if (!postId || !post) {
    return next(ApiError.notFound(errors.ERROR_NO_SUCH_POST));
  }
  return next();
};

module.exports = isPostMidleware;
