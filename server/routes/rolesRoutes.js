const express = require("express");
const roleController = require("../controllers/RoleControllers.js");
const isAuthedMidleware = require("../midleware/authMidleware/isAuthedMidleware.js");
const isAdminMidleware = require("../midleware/roleMidleware/isAdminMidleware.js");

const router = express.Router();

router.get(
  "/get_roles",
  isAuthedMidleware,
  isAdminMidleware,
  roleController.getAllRoles
);
router.post("/create_role", roleController.CreateRole);

module.exports = router;
