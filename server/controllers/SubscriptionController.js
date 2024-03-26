const User = require("../models/User.js");
const Subscription = require("../models/Subscription.js");
const errors = require("../utils/consts/errorConsts.js");
const ApiError = require("../error/ApiError.js");

class SubscriptionController {
  async createSubscription(req, res) {
    const subscriberId = req.user.id;
    const { subscribeTo } = req.query; // id
    try {
      const subscription = await Subscription.create({
        subscribeeId: subscribeTo,
        subscriberId,
      });
      return res.status(200).send({ success: subscription });
    } catch (e) {
      res.status(500).send({ error: errors.ERROR_SERVER });
    }
  }

  async deleteSubscription(req, res) {
    const subscriberId = req.user.id;
    const { subscribeTo } = req.query; // id
    try {
      const subscription = await Subscription.findOne({
        where: { subscriberId, subscribeeId: subscribeTo },
      });
      await subscription.destroy();
      return res.status(200).send({ success: subscription });
    } catch (e) {
      return res.status(500).send({ error: errors.ERROR_SERVER });
    }
  }

  async getSubscripitonsById(req, res, next) {
    const { id } = req.query;
    try {
      const user = await User.findOne({ where: { id } });
      res.status(200).send({ subsctiber: await user.getSubscribers() });
    } catch (e) {
      next(ApiError.iternal);
    }
  }
}

module.exports = new SubscriptionController();
