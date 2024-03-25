const postUtils = require("../../utils/PostUtils.js");
const errors = require("../../utils/consts/errorConsts.js");

const isPostMidleware = async (req, res, next) => {
  const { postId } = req.query;
  const post = await postUtils.getPost(postId);
  if (!postId || !post) {
    return res.status(404).send({ error: errors.ERROR_NO_SUCH_POST });
  }
  return next();
};

module.exports = isPostMidleware;
