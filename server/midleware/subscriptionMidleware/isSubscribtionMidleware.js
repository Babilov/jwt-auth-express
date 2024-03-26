const Subscription = require("../../models/Subscription.js");
const errors = require("../../utils/consts/errorConsts.js");
const ApiError = require("../../error/ApiError.js");

const isSubscribtionMidleware = async (req, res, next) => {
  const subscriberId = req.user.id;
  const { subscribeTo } = req.query; // id
  const existingSubscription = await Subscription.findOne({
    where: {
      subscribeeId: subscribeTo,
      subscriberId,
    },
  });
  if (existingSubscription) {
    return next();
  }
  return next(ApiError.forbidden(ERROR_NO_SUCH_SUBSCRIBPTION));
};

module.exports = isSubscribtionMidleware;
