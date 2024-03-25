const errors = require("../../utils/consts/errorConsts.js");

const queryHasPostIdMidleware = (req, res, next) => {
  const { postId } = req.query;
  if (postId) {
    return next();
  }
  return res.status(404).send({ error: errors.ERROR_NO_SUCH_POST });
};

module.exports = queryHasPostIdMidleware;
