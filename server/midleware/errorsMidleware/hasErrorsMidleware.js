const { validationResult } = require("express-validator");
const ApiError = require("../../error/ApiError.js");

const hasErrorsMidleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(ApiError.badRequest({ errors: errors.array() }));
  }
  next();
};

module.exports = hasErrorsMidleware;
