import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { messageSearch } from '../../utils/errors';

function SavedMovies({ onDeleteMovie, onfilteredMovies, movies }) {
  const [errorMessage, setErrorMessage] = useState('');
  // если пользователь ещё ничего не вводил в поиск
  const [searchActive, setSearchActive] = useState(false);
  const [searchMovies, setSearchMovies] = useState([]);
  // отправка формы
  function handleSubmit(search, shorts) {
    setSearchActive(true);
    // отфильтровываем фильмы по ключевому слову и короткометражки
    const { filterMovies, shortsMovies } = onfilteredMovies(
      movies,
      search,
    );
    if (shorts) {
      setSearchMovies(shortsMovies);
    } else setSearchMovies(filterMovies);
    // сообщения об ошибках после поиска
    if (search === '') {
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
