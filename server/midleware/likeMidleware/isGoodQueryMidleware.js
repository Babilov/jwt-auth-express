const errors = require("../../utils/consts/errorConsts.js");
const ApiError = require("../../error/ApiError.js");

const isGoodQueryForLikeMidleware = (req, res, next) => {
  const { entity, entity_id } = req.query;
  if (entity && entity_id) {
    return next();
  }
  return next(ApiError.badRequest(errors.ERROR_BAD_QUERY));
};

const isGoodQueryForGetMidleware = (req, res, next) => {
  const { user_id } = req.query;
  if (user_id) {
    return next();
  }
  return next(ApiError.badRequest(errors.ERROR_BAD_QUERY));
};

module.exports = { isGoodQueryForLikeMidleware, isGoodQueryForGetMidleware };
