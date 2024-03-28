const express = require("express");
const likeController = require("../controllers/LikeController");
const isAuthedMidleware = require("../midleware/authMidleware/isAuthedMidleware");
const isLikedMidleware = require("../midleware/likeMidleware/isLikedMidleware");
const isAdminMidleware = require("../midleware/roleMidleware/isAdminMidleware");
const {
  isGoodQueryForCreateMidleware,
  isGoodQueryForGetMidleware,
} = require("../midleware/likeMidleware/isGoodQueryMidleware");

const router = express.Router();
router.post(
  "/",
  isAuthedMidleware,
  isGoodQueryForCreateMidleware,
  isLikedMidleware,
  likeController.setOrRemoveLike
);

router.get(
  "/",
  isAuthedMidleware,
  isAdminMidleware,
  isGoodQueryForGetMidleware,
  likeController.getLikeByUserId
);

module.exports = router;
