// URL
export const URL_BEATFILM_MOVIES = 'https://api.nomoreparties.co';
export const URL_BASE = 'http://localhost:3000';

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
// регулярные выражения
export const REGEX_EMAIL = '^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,}$';

// SuccessRequestMessage
export const SUCCESS_UPD = 'Обновление данных прошло успешно';

export const PAGE_TABLET_HEADER = 800;
// отображение фильмов на странице
export const SHORT_FILM = 40;
export const PAGE_DESKTOP = 1280;
export const PAGE_TABLET = 760;

export const MOVIES_DESKTOP_AMOUNT = 12;
export const MOVIES_TABLET_AMOUNT = 8;
export const MOVIES_MOBILE_AMOUNT = 5;

export const MOVIES_DESKTOP_STEP = 3;
export const MOVIES_MOBILE_STEP = 2;
