const express = require("express");
const router = express.Router();
const userRouter = require("./userRoutes.js");
const roleRouter = require("./roleRoutes.js");
const postsRouter = require("./PostRoutes.js");

router.use("/auth", userRouter);
router.use("/role", roleRouter);
router.use("/posts", postsRouter);

module.exports = router;
