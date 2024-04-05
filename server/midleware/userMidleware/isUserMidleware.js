const User = require("../../models/User.js");
const errors = require("../../utils/consts/errorConsts.js");
const ApiError = require("../../error/ApiError.js");

const isUserMidleware = async (req, res, next) => {
  const { id } = req.query;
  const user = await User.findOne({ where: { id } });
  if (!user) {
    return next(ApiError.notFound(errors.ERROR_NO_SUCH_USER));
  }
  req.user = user;
  return next();
};

module.exports = isUserMidleware;
