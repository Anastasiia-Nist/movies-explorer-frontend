import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { messageSearch } from '../../utils/errors';
import { SHORT_FILM } from '../../utils/constants';

function SavedMovies({ onDeleteMovie, onfilteredMovies, movies }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  // если пользователь ещё ничего не вводил в поиск
  const [searchActive, setSearchActive] = useState(false);

  // отправка формы
  function handleSubmit(search, shorts, isSearchChecked) {
    setSearchActive(true);
    // отфильтровываем фильмы по ключевому слову и короткометражки
    const { filterMovies, shortsMovies } = onfilteredMovies(
      movies,
      search,
    );
    if (shorts) {
      setSearchMovies(shortsMovies);
    } else setSearchMovies(filterMovies);
    if (isSearchChecked && search === '') {
      if (shorts) {
        setSearchMovies(movies.filter(
          ({ duration }) => duration < SHORT_FILM,
        ));
      } else {
        setSearchMovies(movies);
      }
    }
    // сообщения об ошибках после поиска
    if (!isSearchChecked && search === '') {
      setErrorMessage(messageSearch.badSearch);
    } else if (filterMovies.length === 0) {
      setErrorMessage(messageSearch.notSearch);
    } else if ((filterMovies !== 0 && shorts && shortsMovies.length === 0)) {
      setErrorMessage(messageSearch.notSearch);
    } else {
      setErrorMessage('');
    }
  }

  return (
    <main className="main">
      <SearchForm
        onSearch={handleSubmit}
      />
      <MoviesCardList
        movies={searchActive ? searchMovies : movies}
        onDeleteMovie={onDeleteMovie}
        errorMessage={errorMessage}
        savedMovies={movies}
      />
    </main>
  );
}
export default SavedMovies;
