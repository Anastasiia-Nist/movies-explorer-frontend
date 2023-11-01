import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import AppContext from '../../context/AppContext';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import mainApi from '../../utils/MainApi';
import { statuses, messages } from '../../utils/errors';
import {
  ENDPOINT_ROOT,
  ENDPOINT_SIGNUP,
  ENDPOINT_SIGNIN,
  ENDPOINT_PROFILE,
  ENDPOINT_MOVIES,
  ENDPOINT_SAVED_MOVIES,
  SUCCESS_UPD,
  SHORT_FILM,
} from '../../utils/constants';

function App() {
  const jwt = localStorage.getItem('jwt');
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  const navigate = useNavigate();

  const [successRequestMessage, setSuccessRequestMessage] = useState('');
  const [errorRequestMessage, setErrorRequestMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  // получаем данные юзера и проверяем авторизацию
  function getUserInfo() {
    setIsLoading(true);
    mainApi
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if (jwt && isLoggedIn) {
      getUserInfo();
    }
  }, [isLoggedIn]);

  // получаем сохранённые фильмы
  function getSavedMovies() {
    mainApi
      .getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch(console.error);
  }
  useEffect(() => {
    if (jwt && isLoggedIn) {
      getSavedMovies();
    }
  }, [isLoggedIn]);

  // очистка сообщений об ошибках от сервера
  function resetErrorRequestMessage() {
    setErrorRequestMessage('');
  }
  function resetSuccessRequestMessage() {
    setSuccessRequestMessage('');
  }
  // функция для задержки изменения текста кнопки, чтобы не было резкого скачка обратно
  function postponeLoading() {
    const timeout = window.setTimeout(() => {
      setIsLoading(false);
      window.clearTimeout(timeout);
    }, 500);
  }
  // авторизация пользователя
  function handleLogin(data) {
    setIsLoading(true);
    mainApi
      .authorize(data)
      .then(({ token }) => {
        if (token) {
          localStorage.setItem('jwt', token);
          localStorage.setItem('isLoggedIn', true);
          setErrorRequestMessage('');
          navigate(ENDPOINT_MOVIES, { replace: false });
        }
      })
      .catch((err) => {
        if (err === statuses.unauthorized) {
          setErrorRequestMessage(messages.unauthorized);
        } else {
          setErrorRequestMessage(messages.auth);
        }
      })
      .finally(() => {
        postponeLoading();
      });
  }

  // регистрация пользователя
  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        if (err === statuses.conflict) {
          setErrorRequestMessage(messages.uniqueEmail);
        } else {
          setErrorRequestMessage(messages.register);
        }
      })
      .finally(() => {
        postponeLoading();
      });
  }

  // выход из аккаунта
  function handleLogOut() {
    setCurrentUser({});
    setSavedMovies([]);
    localStorage.removeItem('jwt');
    localStorage.removeItem('isLoggedIn');
    // очищаем результаты поиска при выходе из аккаунта
    localStorage.removeItem('shorts');
    localStorage.removeItem('search');
    localStorage.removeItem('searchMovies');
    localStorage.removeItem('errorMessage');
    navigate(ENDPOINT_ROOT);
  }

  // обновление даннных пользователя
  function handleUpdateUser({ name, email }) {
    mainApi
      .patchUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data);
        setSuccessRequestMessage(SUCCESS_UPD);
      })
      .catch((err) => {
        if (err === statuses.conflict) {
          setErrorRequestMessage(messages.uniqueEmail);
        } else {
          setErrorRequestMessage(messages.updateError);
        }
      });
  }

  // фильтруем фильмы
  function filteredMovies(movies, inputSearch) {
    // фильтруем все фильмы по ключевому слову
    const filterMovies = movies.filter(
      ({ nameRU, nameEN }) => nameRU.toLowerCase().includes(inputSearch.toLowerCase())
      || nameEN.toLowerCase().includes(inputSearch.toLowerCase()),
    );
    // фильтруем отфильтрованные фильмы по чекбоксу (короткометражки)
    const shortsMovies = filterMovies.filter(
      ({ duration }) => duration < SHORT_FILM,
    );
    return { filterMovies, shortsMovies };
  }

  // сохранить фильм
  function handleClickSavedMovie(
    {
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
    },
    evt,
    toggleSavedCard,
  ) {
    mainApi
      .addMovieCard({
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
      })
      .then((newFilm) => {
        setSavedMovies([newFilm, ...savedMovies]);
        toggleSavedCard(evt);
      })
      .catch(console.error);
  }

  // удалить фильм
  function deleteMovie(movie, evt, toggleSavedCard) {
    const film = savedMovies.find(({ movieId }) => movieId === movie.id);
    if (movie._id) {
      mainApi
        .deleteSavedMovies(movie._id)
        .then(() => {
          setSavedMovies(...[state => state.filter(c => c._id !== movie._id)]);
          toggleSavedCard(evt);
        })
        .catch(console.error);
    } else {
      mainApi
        .deleteSavedMovies(film._id)
        .then(() => {
          setSavedMovies(state => state.filter(c => c._id !== film._id));
          toggleSavedCard(evt);
        })
        .catch(console.error);
    }
  }

  return (
    <>
        <AppContext.Provider value={{ isLoading }}>
          <CurrentUserContext.Provider value={currentUser}>
            <Header loggedIn={isLoggedIn} />
            <Routes>
              <Route path={ENDPOINT_ROOT} element={<Main />} />
              <Route
                path={ENDPOINT_SIGNUP}
                element={
                  isLoggedIn ? (
                    <Navigate to={ENDPOINT_MOVIES} replace />
                  ) : (
                    <Register
                      handleRegister={handleRegister}
                      requestMessage={errorRequestMessage}
                      resetErrorRequestMessage={resetErrorRequestMessage}
                    />
                  )
                }
              />
              <Route
                path={ENDPOINT_SIGNIN}
                element={
                  isLoggedIn ? (
                    <Navigate to={ENDPOINT_MOVIES} replace />
                  ) : (
                    <Login
                      handleLogin={handleLogin}
                      requestMessage={errorRequestMessage}
                      resetErrorRequestMessage={resetErrorRequestMessage}
                    />
                  )
                }
              />
              <Route
                path={ENDPOINT_MOVIES}
                element={
                  <ProtectedRouteElement
                    element={Movies}
                    loggedIn={isLoggedIn}
                    savedMovies={savedMovies}
                    setIsLoading={setIsLoading}
                    onSavedMovie={handleClickSavedMovie}
                    onDeleteMovie={deleteMovie}
                    onfilteredMovies={filteredMovies}
                  />
                }
              />
              <Route
                path={ENDPOINT_SAVED_MOVIES}
                element={
                  <ProtectedRouteElement
                    element={SavedMovies}
                    loggedIn={isLoggedIn}
                    onDeleteMovie={deleteMovie}
                    onfilteredMovies={filteredMovies}
                    movies={savedMovies}
                  />
                }
              />
              <Route
                path={ENDPOINT_PROFILE}
                element={
                  <ProtectedRouteElement
                    element={Profile}
                    loggedIn={isLoggedIn}
                    onLogout={handleLogOut}
                    handleUpdateUser={handleUpdateUser}
                    requestMessage={errorRequestMessage}
                    successRequestMessage={successRequestMessage}
                    resetErrorRequestMessage={resetErrorRequestMessage}
                    resetSuccessRequestMessage={resetSuccessRequestMessage}
                  />
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </CurrentUserContext.Provider>
        </AppContext.Provider>
    </>
  );
}

export default App;
