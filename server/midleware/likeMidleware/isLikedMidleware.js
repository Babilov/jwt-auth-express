const ApiError = require("../../error/ApiError.js");
const errors = require("../../utils/consts/errorConsts.js");
const Like = require("../../models/Like.js");

const isLikedMidleware = async (req, res, next) => {
  const { entity, entity_id } = req.query;
  const { id } = req.user;
  try {
    const like = await Like.findOne({
      where: { entity, entity_id, UserId: id },
    });
    like ? (req.like = like) : (req.like = null);
    return next();
  } catch (e) {
    return next(ApiError.badRequest(errors.ERROR_BAD_QUERY));
  }
};

module.exports = isLikedMidleware;
