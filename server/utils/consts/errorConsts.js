const errors = {
  ERROR_USER_EXISTS: "Такое имя пользователя уже существует",
  ERROR_NO_SUCH_USER: "Нет такого пользователя",
  ERROR_WRONG_PASSWORD: "Пароль введён неверно",
  ERROR_SERVER: "Ошибка сервера",
  ERROR_NOT_AUTHED: "Вы не авторизованы",
  ERROR_BAD_TOKEN: "Указан неверный токен",
  ERROR_NO_ACCESS: "У вас нет доступа к этому ресурсу",
  ERROR_EXISTS_ROLE: "Такая роль уже есть",
  ERROR_SHORT_POST: "Пост не должен меньше 4 символов",
  ERROR_SHORT_PASSWORD: "Пароль должен быть как минимум 6 символов",
  ERROR_WRONG_LOGIN_SIZE: "Логин должен быть 4-20 символов",
  ERROR_WRONG_USER: "Вы не создатель поста",
  ERROR_NO_SUCH_POST: "Нет такого поста",
  ERROR_NO_SUCH_COMMENT: "Нет такого комментария",
  ERROR_BAD_SUBSCRIPTION: "Вы не можете подписаться на самого себя",
  ERROR_DUBLE_SUBSCRIPTION:
    "Вы не можете подписаться на одного человека дважды",
  ERROR_NO_SUCH_SUBSCRIBPTION: "Вы не подписаны на этого пользователя",
  ERROR_NO_USER_ID_QUERY: "Не указано id пользователя",
  ERROR_NO_POST_ID_QUERY: "Не указано id поста",
  ERROR_UNCATCHED_ERROR: "Непредвиденная ошибка!",
  ERROR_NOT_COMMENT_OWNER: "Вы не можете изменить чужой пост",
  ERROR_BAD_QUERY: "Указаны неверные query-параметры",
};

module.exports = errors;
