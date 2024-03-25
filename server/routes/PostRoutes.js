const express = require("express");
const { body } = require("express-validator");
const hasErrorsMidleware = require("../midleware/hasErrorsMidleware.js");
const postController = require("../controllers/PostController.js");
const isAuthedMidleware = require("../midleware/isAuthedMidleware.js");
const isPostOwnerMidlewareOrAdmin = require("../midleware/isPostOwnerMidlewareOrAdmin.js");
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
router.delete(
  "/",
  isAuthedMidleware,
  isPostOwnerMidlewareOrAdmin,
  postController.deletePost
);

router.patch(
  "/",
  isAuthedMidleware,
  isPostOwnerMidlewareOrAdmin,
  postController.updatePost
);

module.exports = router;
