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
};

module.exports = errors;
