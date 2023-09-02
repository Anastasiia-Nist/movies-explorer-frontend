// URL
export const URL_BEATFILM_MOVIES = 'https://api.nomoreparties.co';
export const URL_BASE = 'https://api.diploma-by-anastasiia.nomoreparties.co';

// ENDPOINTS
export const ENDPOINT_ROOT = '/';
export const ENDPOINT_SIGNUP = '/signup';
export const ENDPOINT_SIGNIN = '/signin';
export const ENDPOINT_PROFILE = '/profile';
export const ENDPOINT_MOVIES = '/movies';
export const ENDPOINT_SAVED_MOVIES = '/saved-movies';

// LANDING
export const PORTFOLIO_PROJECTS = [
  {
    name: 'Статичный сайт',
    url: 'https://github.com/Anastasiia-Nist/how-to-learn',
  },
  {
    name: 'Адаптивный сайт',
    url: 'https://anastasiia-nist.github.io/russian-travel',
  },
  { name: 'Одностраничное приложение', url: 'https://a.nistratova14.fvds.ru' },
];

export const TECHS = [
  'HTML',
  'CCS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

// для плавного скрола
export function smoothScroll(evt) {
  evt.preventDefault();
  const id = evt.target.hash;
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

// временное решение для вёрстки
export const testSavedMovies = [
  {
    _id: '64d6372ee22d9f2c6841d095',
    country: 'Франция',
    director: 'Люк Бессон',
    duration: 126,
    year: '1996',
    description:
      'Последняя надежда человечества — безалаберный нью-йоркский таксист.',
    image:
      'https://tvbesedka.com/Upload/2019/5/12/22/40/1/e7b1cf20-a87b-46d5-bff1-22f0df772ba8.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=KpTzOwsq36c',
    thumbnail: 'https://www.yaom.ru/tv-programm/tvimg/pyatyj-element.jpg',
    owner: '64d63428e22d9f2c6841d08f',
    movieId: 1001,
    nameRU: 'Пятый элемент',
    nameEN: 'The Fifth Element',
    __v: 0,
  },
  {
    _id: '64d6372ee22d9f2c6841d095',
    country: 'Франция',
    director: 'Люк Бессон',
    duration: 126,
    year: '1996',
    description:
      'Последняя надежда человечества — безалаберный нью-йоркский таксист.',
    image:
      'https://tvbesedka.com/Upload/2019/5/12/22/40/1/e7b1cf20-a87b-46d5-bff1-22f0df772ba8.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=KpTzOwsq36c',
    thumbnail: 'https://www.yaom.ru/tv-programm/tvimg/pyatyj-element.jpg',
    owner: '64d63428e22d9f2c6841d08f',
    movieId: 1001,
    nameRU: 'Пятый элемент',
    nameEN: 'The Fifth Element',
    __v: 0,
  },
  {
    _id: '64d6372ee22d9f2c6841d095',
    country: 'Франция',
    director: 'Люк Бессон',
    duration: 126,
    year: '1996',
    description:
      'Последняя надежда человечества — безалаберный нью-йоркский таксист.',
    image:
      'https://tvbesedka.com/Upload/2019/5/12/22/40/1/e7b1cf20-a87b-46d5-bff1-22f0df772ba8.jpg',
    trailerLink: 'https://www.youtube.com/watch?v=KpTzOwsq36c',
    thumbnail: 'https://www.yaom.ru/tv-programm/tvimg/pyatyj-element.jpg',
    owner: '64d63428e22d9f2c6841d08f',
    movieId: 1001,
    nameRU: 'Пятый элемент',
    nameEN: 'The Fifth Element',
    __v: 0,
  },
];
