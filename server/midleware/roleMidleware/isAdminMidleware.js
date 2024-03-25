const errors = require("../../utils/consts/errorConsts.js");
const userUtils = require("../../utils/UserUtils.js");

const isAdminMidleware = (req, res, next) => {
  if (!userUtils.checkAdmin(req.user)) {
    return res.status(403).send({ error: errors.ERROR_NO_ACCESS });
  } else {
    next();
  }
};

module.exports = isAdminMidleware;
