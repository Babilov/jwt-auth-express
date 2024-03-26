const express = require("express");
const isAuthedMidleware = require("../midleware/authMidleware/isAuthedMidleware.js");
const isExistingSubscriptionMidleware = require("../midleware/subscriptionMidleware/isExistingSubscriptionMidleware.js");
const isSubscribtionMidleware = require("../midleware/subscriptionMidleware/isSubscribtionMidleware.js");
const isSelfSubscriptionMidleware = require("../midleware/subscriptionMidleware/isSelfSubscriptionMidleware.js");
const isUserIdQueryMidleware = require("../midleware/subscriptionMidleware/isUserIdQueryMidleware.js");
const isUserMidleware = require("../midleware/userMidleware/isUserMidleware.js");
const subscriptionController = require("../controllers/SubscriptionController.js");
const router = express.Router();

router.post(
  "/",
  isAuthedMidleware,
  isSelfSubscriptionMidleware,
  isExistingSubscriptionMidleware,
  subscriptionController.createSubscription
);

router.get(
  "/",
  isUserIdQueryMidleware,
  isUserMidleware,
  subscriptionController.getSubscripitonsById
);

router.delete(
  "/",
  isAuthedMidleware,
  isSubscribtionMidleware,
  subscriptionController.deleteSubscription
);

module.exports = router;
