import './SearchForm.css';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearch }) {
  const [inputSearch, setInputSearch] = useState('');
  const [isShortMovie, setIsShortMovie] = useState(false);

  function handleCheckbox() {
    setIsShortMovie(!isShortMovie);
    // повторная отправка для фильтрации при нажатии на чекбокс
    onSearch(inputSearch, !isShortMovie);
  }
  function handleInputChange(evt) {
    setInputSearch(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(inputSearch, isShortMovie);
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
            <FilterCheckbox onShorts={handleCheckbox} />
          </div>
        </form>
      </div>
    </section>
  );
}
export default SearchForm;
