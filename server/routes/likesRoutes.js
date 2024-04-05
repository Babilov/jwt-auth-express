const express = require("express");
const likeController = require("../controllers/LikeController");
const isAuthedMidleware = require("../midleware/authMidleware/isAuthedMidleware");
const isLikedMidleware = require("../midleware/likeMidleware/isLikedMidleware");
const isAdminMidleware = require("../midleware/roleMidleware/isAdminMidleware");
const {
  isGoodQueryForLikeMidleware,
  isGoodQueryForGetMidleware,
} = require("../midleware/likeMidleware/isGoodQueryMidleware");

const router = express.Router();
router.post(
  "/",
  isAuthedMidleware,
  isGoodQueryForLikeMidleware,
  isLikedMidleware,
  likeController.setOrRemoveLike
);

router.get("/", isGoodQueryForLikeMidleware, likeController.getLikesOfEntity);

router.get(
  "/userLikes",
  isAuthedMidleware,
  isAdminMidleware,
  isGoodQueryForGetMidleware,
  likeController.getLikeByUserId
);

router.get(
  "/isLiked",
  isAuthedMidleware,
  isGoodQueryForLikeMidleware,
  isLikedMidleware,
  likeController.isLiked
);

module.exports = router;
