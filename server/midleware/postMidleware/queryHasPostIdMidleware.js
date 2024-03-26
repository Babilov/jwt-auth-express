const errors = require("../../utils/consts/errorConsts.js");
const ApiError = require("../../error/ApiError.js");

const queryHasPostIdMidleware = (req, res, next) => {
  const { postId } = req.query;
  if (postId) {
    return next();
  }
  return next(ApiError.notFound(errors.ERROR_NO_SUCH_POST));
};

module.exports = queryHasPostIdMidleware;
