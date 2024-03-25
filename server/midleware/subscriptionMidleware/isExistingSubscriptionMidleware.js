const Subscription = require("../../models/Subscription.js");
const errors = require("../../utils/consts/errorConsts.js");

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
    return res.status(403).send({ error: errors.ERROR_DUBLE_SUBSCRIPTION });
  }
  return next();
};

module.exports = isExistingSubscriptionMidleware;
