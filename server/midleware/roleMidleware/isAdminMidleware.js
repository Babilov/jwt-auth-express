const errors = require("../../utils/consts/errorConsts.js");
const userUtils = require("../../utils/UserUtils.js");
const ApiError = require("../../error/ApiError.js");

const isAdminMidleware = (req, res, next) => {
  if (!userUtils.checkAdmin(req.user)) {
    return next(ApiError.forbidden(errors.ERROR_NO_ACCESS));
  } else {
    return next();
  }
};

module.exports = isAdminMidleware;
