import { URL_BEATFILM_MOVIES } from './constants';

export class Api {
  constructor(dataApi) {
    this._baseUrl = dataApi.baseUrl;
    this._headers = dataApi.headers;
  }

  //
  async _request(endpoint, options) {
    const res = await fetch(`${this._baseUrl}/${endpoint}`, options);
    return this._checkResult(res);
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то сломалось. Ошибка: ${res.status}`);
  }

  getMovies() {
    return this._request('beatfilm-movies', { headers: this._headers });
  }
}
const dataApi = {
  baseUrl: URL_BEATFILM_MOVIES,
  headers: {
    'Content-Type': 'application/json',
  },
};
const moviesApi = new Api(dataApi);
export default moviesApi;
