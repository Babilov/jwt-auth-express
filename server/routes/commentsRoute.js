const express = require("express");
const { body } = require("express-validator");
const isAuthed = require("../midleware/authMidleware/isAuthedMidleware");
const queryHasPostIdMidleware = require("../midleware/postMidleware/queryHasPostIdMidleware");
const isPostMidleware = require("../midleware/postMidleware/isPostMidleware.js");
const hasErrorsMidleware = require("../midleware/errorsMidleware/hasErrorsMidleware.js");
const isCommentAuthorMidleware = require("../midleware/commentMidleware/isCommentAuthorMidleware.js");
const isCommetAuthorOrAdminMidleware = require("../midleware/commentMidleware/isCommetAuthorOrAdminMidleware.js");
const commentController = require("../controllers/CommetController.js");

const router = express.Router();

router.post(
  "/",
  isAuthed,
  [body("content").notEmpty().withMessage("Комментарий не может быть пустым")],
  hasErrorsMidleware,
  isPostMidleware,
  commentController.createComment
);

router.get("/", queryHasPostIdMidleware, commentController.getCommentsOfPost);
router.get("/:commentId", commentController.getCommetById);
router.patch(
  "/:commentId",
  isAuthed,
  isCommentAuthorMidleware,
  commentController.updateCommentById
);
router.delete(
  "/:commentId",
  isAuthed,
  isCommetAuthorOrAdminMidleware,
  commentController.deleteCommentById
);

module.exports = router;
