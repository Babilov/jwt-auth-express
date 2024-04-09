const ApiError = require("../../error/ApiError.js");
const errors = require("../../utils/consts/errorConsts.js");
const Like = require("../../models/Like.js");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

const isLikedMidleware = async (req, res, next) => {
  const { entity, entity_id } = req.query;
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    req.like = null;
    return next();
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, async (err, user) => {
    if (err) return next(ApiError.forbidden(errors.ERROR_BAD_TOKEN));
    const { id } = user;
    try {
      const like = await Like.findOne({
        where: { entity, entity_id, UserId: id },
      });
      req.like = like || null;
      return next();
    } catch (e) {
      return next(ApiError.badRequest(errors.ERROR_BAD_QUERY));
    }
  });
};

module.exports = isLikedMidleware;
