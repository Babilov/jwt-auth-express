const express = require("express");
const isAuthedMidleware = require("../midleware/isAuthedMidleware.js");
const isExistingSubscriptionMidleware = require("../midleware/isExistingSubscriptionMidleware.js");
const isSelfSubscriptionMidleware = require("../midleware/isSelfSubscriptionMidleware.js");
const subscriptionController = require("../controllers/SubscriptionController.js");
const router = express.Router();

router.post(
  "/",
  isAuthedMidleware,
  isSelfSubscriptionMidleware,
  isExistingSubscriptionMidleware,
  subscriptionController.createSubscription
);

module.exports = router;
