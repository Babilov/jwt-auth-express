const jwt = require("jsonwebtoken");
const errors = require("../../utils/consts/errorConsts");
const ApiError = require("../../error/ApiError.js");

const SECKRET_KEY = process.env.SECKRET_KEY;

const isAuthedMidleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  try {
    const token = authHeader.split(" ")[1];
    if (!token) {
      return next(ApiError.unauthorized(errors.ERROR_NOT_AUTHED));
    }
    jwt.verify(token, SECKRET_KEY, (err, user) => {
      if (err) return next(ApiError.forbidden(errors.ERROR_BAD_TOKEN));
      req.user = user;
      return next();
    });
  } catch (e) {
    return next(ApiError.forbidden(errors.ERROR_NOT_AUTHED));
  }
};

module.exports = isAuthedMidleware;
