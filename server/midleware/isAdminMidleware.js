const { modes } = require("tar");
const errors = require("../utils/consts/errorConsts.js");

const isAdminMidleware = (req, res, next) => {
  if (!req.user || req.user.RoleId !== 2) {
    return res.status(403).send({ error: errors.ERROR_NO_ACCESS });
  } else {
    next();
  }
};

module.exports = isAdminMidleware;
