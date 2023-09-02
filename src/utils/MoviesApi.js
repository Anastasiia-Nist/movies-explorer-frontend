import { URL_BEATFILM_MOVIES } from './constants';

export class Api {
  constructor(dataApi) {
    this._baseUrl = dataApi.baseUrl;
    this._headers = dataApi.headers;
  }

  //
  _request(endpoint, options) {
    return fetch(`${this._baseUrl}/${endpoint}`, options).then(
      this._checkResult,
    );
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то сломалось. Ошибка: ${res.status}`);
  }

  // временное решение для вёрстки
  getMovies() {
    return this._request('beatfilm-movies');
  }
}
const dataApi = {
  baseUrl: URL_BEATFILM_MOVIES,
  headers: {
    'Content-Type': 'application/json',
  },
};
const api = new Api(dataApi);
export default api;
