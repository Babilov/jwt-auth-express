const Subscription = require("../../models/Subscription.js");
const errors = require("../../utils/consts/errorConsts.js");

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
  return res.status(403).send({ error: errors.ERRROR_NO_SUCH_SUBSCRIBPTION });
};

module.exports = isSubscribtionMidleware;
