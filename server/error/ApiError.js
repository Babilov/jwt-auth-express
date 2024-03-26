const errors = require("../utils/consts/errorConsts.js");

class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static unauthorized(message) {
    return new ApiError(400, message);
  }

  static badRequest(message) {
    return new ApiError(400, message);
  }

  static forbidden(message) {
    return new ApiError(403, message);
  }

  static notFound(message) {
    return new ApiError(404, message);
  }

  static iternal() {
    return new ApiError(500, errors.ERROR_SERVER);
  }
}

module.exports = ApiError;
