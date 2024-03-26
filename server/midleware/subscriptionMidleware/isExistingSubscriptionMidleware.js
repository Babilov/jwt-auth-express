const Subscription = require("../../models/Subscription.js");
const errors = require("../../utils/consts/errorConsts.js");
const ApiError = require("../../error/ApiError.js");

const isExistingSubscriptionMidleware = async (req, res, next) => {
  const subscriberId = req.user.id;
  const { subscribeTo } = req.query; // id
  const existingSubscription = await Subscription.findOne({
    where: {
      subscribeeId: subscribeTo,
      subscriberId,
    },
  });
  if (existingSubscription) {
    return next(ApiError.forbidden(errors.ERROR_DUBLE_SUBSCRIPTION));
  }
  return next();
};

module.exports = isExistingSubscriptionMidleware;
