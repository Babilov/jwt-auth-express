const Like = require("../models/Like.js");
const User = require("../models/User.js");
const ApiError = require("../error/ApiError.js");
const errors = require("../utils/consts/errorConsts.js");

class LikeController {
  async setOrRemoveLike(req, res, next) {
    const { entity, entity_id } = req.query;
    const { id } = req.user;
    let like;
    try {
      if (!req.like) {
        like = await Like.create({
          entity,
          entity_id,
          UserId: id,
        });
        return res.status(200).send({ like });
      }
      like = req.like;
      await like.destroy();
      return res.status(200).send({ removed_like: like });
    } catch (e) {
      next(ApiError.internal());
    }
  }

  async getLikeByUserId(req, res, next) {
    const { user } = req;
    try {
      return res.status(200).send(await user.getLikes());
    } catch (e) {
      next(ApiError.notFound(errors.ERROR_NO_SUCH_USER));
    }
  }

  async getLikesOfEntity(req, res, next) {
    const { entity, entity_id } = req.query;
    try {
      const likes = await Like.findAll({ where: { entity, entity_id } });
      return res.status(200).send(likes);
    } catch (e) {
      return next(ApiError.badRequest({ error: errors.ERROR_BAD_QUERY }));
    }
  }

  async isLiked(req, res, next) {
    return res.status(200).send(req.like);
  }
}

module.exports = new LikeController();
