import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';
import { messages } from '../../utils/errors';

function Movies({
  setIsLoading, onSavedMovie, onDeleteMovie, onfilteredMovies, savedMovies,
}) {
  const app = useContext(AppContext);
  const movies = JSON.parse(localStorage.getItem('allMovies')) || [];
  const searchMoviesDefault = JSON.parse(localStorage.getItem('searchMovies')) || [];
  // const isShorts = JSON.parse(localStorage.getItem('shorts')) || false;
  const [searchMovies, setSearchMovies] = useState(searchMoviesDefault);
  const [errorMessage, setErrorMessage] = useState('');

  // отправка формы
  function handleSubmit(search, shorts) {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((allMoviesArr) => {
        localStorage.setItem('allMovies', JSON.stringify(allMoviesArr));
        // отфильтровываем фильмы по ключевому слову и короткометражки
        const { filterMovies, shortsMovies } = onfilteredMovies(movies, search);
        if (shorts) {
          setSearchMovies(shortsMovies);
          localStorage.setItem('searchMovies', JSON.stringify(shortsMovies));
        } else {
          setSearchMovies(filterMovies);
          localStorage.setItem('searchMovies', JSON.stringify(filterMovies));
        }
      })
      .catch(() => setErrorMessage(messages.badRequestError))
      .finally(() => {
        setIsLoading(false);
      });

    // сообщения об ошибке при поиске
    if (movies.length !== 0 && search === '') {
      setErrorMessage('«Нужно ввести ключевое слово»');
    } else if ((movies.length !== 0 && searchMovies.length === 0)) {
      setErrorMessage('«Ничего не найдено»');
    } else {
      setErrorMessage('');
    }
  }
  return (
    <main className="main">
      <SearchForm onSearch={handleSubmit} />
      {app.isLoading && <Preloader />}
      <MoviesCardList
        movies={searchMovies}
        savedMovies={savedMovies}
        errorMessage={errorMessage}
        onSavedMovie={onSavedMovie}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
}
export default Movies;
