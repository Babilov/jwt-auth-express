const postUtils = require("../../utils/PostUtils.js");
const errors = require("../../utils/consts/errorConsts.js");
const ApiError = require("../../error/ApiError.js");

const isPostMidleware = async (req, res, next) => {
  const { postId } = req.query;
  if (!postId) {
    throw ApiError.notFound(errors.ERROR_NO_POST_ID_QUERY);
  }
  try {
    const post = await postUtils.getPost(postId);
    if (!post) {
      throw ApiError.notFound(errors.ERROR_NO_SUCH_POST);
    }
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = isPostMidleware;
