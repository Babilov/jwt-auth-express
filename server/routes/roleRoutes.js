const express = require("express");
const roleController = require("../controllers/RoleControllers.js");
const verifyToken = require("../midleware/verifyToken.js");
const isAdminMidleware = require("../midleware/isAdminMidleware.js");

const router = express.Router();

router.get(
  "/get_roles",
  verifyToken,
  isAdminMidleware,
  roleController.getAllRoles
);
router.post("/create_role", roleController.CreateRole);

module.exports = router;
