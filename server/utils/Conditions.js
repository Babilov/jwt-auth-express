class Conditions {
  buildWhereCondition(UserId, postId) {
    if (UserId && postId) {
      return { id: postId, UserId };
    } else if (UserId) {
      return { UserId };
    } else if (postId) {
      return { id: postId };
    }
    return {};
  }
}

module.exports = new Conditions();
