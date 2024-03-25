const errors = require("../../utils/consts/errorConsts.js");

const isSelfSubscriptionMidleware = (req, res, next) => {
  const subscriberId = req.user.id;
  const { subscribeTo } = req.query; // id
  if (subscribeTo == subscriberId) {
    return res.status(403).send({ error: errors.ERROR_BAD_SUBSCRIPTION });
  }
  return next();
};

module.exports = isSelfSubscriptionMidleware;
