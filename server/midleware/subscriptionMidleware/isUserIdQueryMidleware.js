const ApiError = require("../../error/ApiError.js");
const errors = require("../../utils/consts/errorConsts.js");

const isUserIdQueryMidleware = (req, res, next) => {
  if (!req.query.id) {
    return next(ApiError.badRequest(errors.ERROR_NO_ID_QUERY));
  }
  return next();
};

module.exports = isUserIdQueryMidleware;
