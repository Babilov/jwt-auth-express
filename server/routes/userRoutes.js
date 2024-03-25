const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const User = require("../models/User.js");
const Role = require("../models/Role.js");
const userController = require("../controllers/UserController.js");
const hasErrorsMidleware = require("../midleware/hasErrorsMidleware.js");
const errors = require("../utils/consts/errorConsts.js");

router.post(
  "/register",
  [
    body("username")
      .isLength({ min: 4, max: 20 })
      .withMessage(errors.ERROR_WRONG_LOGIN_SIZE),
    body("password")
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage(errors.ERROR_SHORT_PASSWORD),
  ],
  hasErrorsMidleware,
  userController.register
);

router.post("/login", userController.login);

module.exports = router;
