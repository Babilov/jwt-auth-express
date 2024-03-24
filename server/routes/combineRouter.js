const express = require("express");
const router = express.Router();
const userRouter = require("./userRoutes.js");
const roleRouter = require("./roleRoutes.js");

router.use("/auth", userRouter);
router.use("/api", roleRouter);

module.exports = router;
