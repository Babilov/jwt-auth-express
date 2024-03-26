const ApiError = require("../../error/ApiError.js");
const errors = require("../../utils/consts/errorConsts.js");

const errorMidleware = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).send({ message: err.message });
  }
  return res.status(500).json({ message: errors.ERROR_UNCATCHED_ERROR });
};

module.exports = errorMidleware;
