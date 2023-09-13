// URL
export const URL_BEATFILM_MOVIES = 'https://api.nomoreparties.co';
export const URL_BASE = 'https://api.diploma-by-anastasiia.nomoreparties.co';
// export const URL_BASE = 'http://localhost:3000';

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
