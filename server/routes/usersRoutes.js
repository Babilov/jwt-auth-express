const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/UserController.js");
const hasErrorsMidleware = require("../midleware/errorsMidleware/hasErrorsMidleware.js");
const errors = require("../utils/consts/errorConsts.js");
const isAuthedMidleware = require("../midleware/authMidleware/isAuthedMidleware.js");

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

router.get("/user", isAuthedMidleware, userController.getUser);
router.get("/user/:id", userController.getUserById);
router.patch(
  "/user/description",
  isAuthedMidleware,
  userController.setProfileDescription
);

module.exports = router;
