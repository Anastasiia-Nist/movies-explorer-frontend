import { URL_BASE } from './constants';

const data = {
  baseUrl: URL_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
};

class MainApi {
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
    return Promise.reject(res.status);
  }

  authorize({ email, password }) {
    return this._request('signin', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    });
  }

  register(name, email, password) {
    return this._request('signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    });
  }

  getUserInfo() {
    return this._request('users/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }

  patchUserInfo(name, email) {
    return this._request('users/me', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  addMovieCard({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    id,
    nameRU,
    nameEN,
  }) {
    return this._request('movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN,
      }),
    });
  }

  getSavedMovies() {
    return this._request('movies', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }

  deleteSavedMovies(cardId) {
    return this._request(`movies/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }
}

const mainApi = new MainApi(data);
export default mainApi;
