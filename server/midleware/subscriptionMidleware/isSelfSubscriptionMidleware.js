const errors = require("../../utils/consts/errorConsts.js");
const ApiError = require("../../error/ApiError.js");

const isSelfSubscriptionMidleware = (req, res, next) => {
  const subscriberId = req.user.id;
  const { subscribeTo } = req.query; // id
  if (subscribeTo == subscriberId) {
    return next(ApiError.forbidden(errors.ERROR_BAD_SUBSCRIPTION));
  }
  return next();
};

module.exports = isSelfSubscriptionMidleware;
