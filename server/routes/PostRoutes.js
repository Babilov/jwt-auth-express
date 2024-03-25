const express = require("express");
const { body } = require("express-validator");
const hasErrorsMidleware = require("../midleware/errorsMidleware/hasErrorsMidleware.js");
const postController = require("../controllers/PostController.js");
const isAuthedMidleware = require("../midleware/authMidleware/isAuthedMidleware.js");
const isPostMidleware = require("../midleware/postMidleware/isPostMidleware.js");
const queryHasPostIdMidleware = require("../midleware/postMidleware/queryHasPostIdMidleware.js");
const isPostOwnerMidlewareOrAdmin = require("../midleware/postMidleware/isPostOwnerMidlewareOrAdmin.js");
const errors = require("../utils/consts/errorConsts.js");

const router = express.Router();

router.get("/", isAuthedMidleware, postController.getPosts);
router.post(
  "/",
  isAuthedMidleware,
  [body("content").isLength({ min: 4 }).withMessage(errors.ERROR_SHORT_POST)],
  hasErrorsMidleware,
  postController.createPost
);

router.patch(
  "/",
  isAuthedMidleware,
  queryHasPostIdMidleware,
  isPostOwnerMidlewareOrAdmin,
  postController.updatePost
);

router.delete(
  "/",
  isAuthedMidleware,
  isPostMidleware,
  isPostOwnerMidlewareOrAdmin,
  postController.deletePost
);

module.exports = router;
