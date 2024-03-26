const express = require("express");
const router = express.Router();
const userRouter = require("./userRoutes.js");
const roleRouter = require("./roleRoutes.js");
const postsRouter = require("./postRoutes.js");
const subscriptionRouter = require("./subscriptionRouter.js");

router.use("/auth", userRouter);
router.use("/role", roleRouter);
router.use("/post", postsRouter);
router.use("/subscription", subscriptionRouter);

module.exports = router;
