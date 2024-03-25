const express = require("express");
const { body } = require("express-validator");
const hasErrorsMidleware = require("../midleware/hasErrorsMidleware.js");
const PostController = require("../controllers/PostController.js");
const isAuthed = require("../midleware/isAuthed.js");
const errors = require("../utils/consts/errorConsts.js");

const router = express.Router();

router.get("/", (req, res) => console.log("message"));
router.post(
  "/",
  isAuthed,
  [body("content").isLength({ min: 4 }).withMessage(errors.ERROR_SHORT_POST)],
  hasErrorsMidleware,
  PostController.createPost
);

module.exports = router;
