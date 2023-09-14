import './SearchForm.css';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch, isShorts, inputSearchDefault }) {
  const [inputSearch, setInputSearch] = useState(inputSearchDefault ?? '');
  const [isShortMovies, setIsShortMovie] = useState(isShorts ?? false);

  function handleCheckbox() {
    setIsShortMovie(!isShortMovies);
    // повторная отправка для фильтрации при нажатии на чекбокс
    onSearch(inputSearch, !isShortMovies);
  }
  function handleInputChange(evt) {
    setInputSearch(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(inputSearch, isShortMovies);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" name="search" onSubmit={handleSubmit} noValidate>
          <div className="search__form-container">
            <input
              className="search__input"
              type="text"
              name="search-movies"
              placeholder="Фильм"
              required
              autoComplete="off"
              value={inputSearch || ''}
              onChange={handleInputChange}
            />
            <button
              className="search__submit-btn button"
              type="submit"
              aria-label="Кнопка поиска фильмов"
            >
              Найти
            </button>
          </div>
          <div className="search__checkbox-container">
            <FilterCheckbox onChange={handleCheckbox} isShortMovies={isShortMovies}/>
          </div>
        </form>
      </div>
    </section>
  );
}
export default SearchForm;
