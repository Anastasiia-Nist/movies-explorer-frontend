const statuses = {
  badRequest: 400,
  notFound: 404,
  default: 500,
  conflict: 409,
  forbidden: 403,
  unauthorized: 401,
};
const messages = {
  notFound: 'По указанному пути ничего не найдено',
  serverError: 'На сервере произошла ошибка',
  unauthorized: 'Введены неправильный email или пароль',
  auth: 'При авторизации пользователя произошла ошибка',
  register: 'При регистрации пользователя произошла ошибка',
  uniqueEmail: 'Пользователь с таким email уже существует',
  updateError: 'Не удалось обновить данные пользователя',
  badRequestError: '«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»',
};

module.exports = { statuses, messages };
