const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/UserController.js");
const hasErrorsMidleware = require("../midleware/errorsMidleware/hasErrorsMidleware.js");
const errors = require("../utils/consts/errorConsts.js");

const router = express.Router();

router.post(
  "/register",
  [
    body("username")
      .isLength({ min: 4, max: 20 })
      .withMessage(errors.ERROR_WRONG_LOGIN_SIZE),
    body("password")
      .isLength({ min: 6 })
      .withMessage(errors.ERROR_SHORT_PASSWORD),
  ],
  hasErrorsMidleware,
  userController.register
);

router.post("/login", userController.login);

module.exports = router;