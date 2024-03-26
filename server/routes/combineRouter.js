const express = require("express");
const router = express.Router();
const userRouter = require("./usersRoutes.js");
const roleRouter = require("./rolesRoutes.js");
const postsRouter = require("./postsRoutes.js");
const subscriptionRouter = require("./subscriptionsRouter.js");
const commetssRouter = require("./commentsRoute.js");

router.use("/auth", userRouter);
router.use("/roles", roleRouter);
router.use("/posts", postsRouter);
router.use("/subscription", subscriptionRouter);
router.use("/comments", commetssRouter);

module.exports = router;
