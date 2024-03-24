const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const User = require("../models/User.js");
const Role = require("../models/Role.js");
const userController = require("../controllers/UserController.js");
const hasErrorsMidleware = require("../midleware/hasErrorsMidleware.js");

router.post(
  "/register",
  [
    body("username")
      .isLength({ min: 4, max: 20 })
      .withMessage("Логин должен быть 4-20 символов"),
    body("password")
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage("Пароль должен быть как минимум 6 символов"),
  ],
  hasErrorsMidleware,
  userController.register
);

router.post("/login", userController.login);

module.exports = router;
