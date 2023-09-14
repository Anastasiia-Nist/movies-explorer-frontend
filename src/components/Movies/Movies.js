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
  const searchMoviesDefault = JSON.parse(localStorage.getItem('searchMovies')) ?? [];
  const isShorts = JSON.parse(localStorage.getItem('shorts')) ?? false;
  const inputSearchDefault = localStorage.getItem('search') ?? '';
  const errorMessageDefault = localStorage.getItem('errorMessage') ?? '';
  const [searchMovies, setSearchMovies] = useState(searchMoviesDefault);
  const [errorMessage, setErrorMessage] = useState(errorMessageDefault);

  // отправка формы
  function handleSubmit(search, shorts) {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((allMovies) => {
        localStorage.setItem('search', search);
        localStorage.setItem('shorts', shorts);
        // отфильтровываем фильмы по ключевому слову и короткометражки
        const { filterMovies, shortsMovies } = onfilteredMovies(allMovies, search);

        if (shorts) {
          setSearchMovies(shortsMovies);
          localStorage.setItem('searchMovies', JSON.stringify(shortsMovies));
        } else {
          setSearchMovies(filterMovies);
          localStorage.setItem('searchMovies', JSON.stringify(filterMovies));
        }

        // сообщения об ошибке при поиске
        if (allMovies.length !== 0 && search === '') {
          setErrorMessage('«Нужно ввести ключевое слово»');
          localStorage.setItem('errorMessage', '«Нужно ввести ключевое слово»');
        } else if (filterMovies.length === 0) {
          setErrorMessage('«Ничего не найдено»');
          localStorage.setItem('errorMessage', '«Ничего не найдено»');
        } else if ((filterMovies !== 0 && shorts && shortsMovies.length === 0)) {
          setErrorMessage('«Ничего не найдено»');
          localStorage.setItem('errorMessage', '«Ничего не найдено»');
        } else {
          setErrorMessage('');
          localStorage.setItem('errorMessage', '');
        }
      })
      .catch(() => setErrorMessage(messages.badRequestError))
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <main className="main">
      <SearchForm
        onSearch={handleSubmit}
        isShorts={isShorts}
        inputSearchDefault={inputSearchDefault}
      />
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
