import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  function handleSubmit(evt) {
    evt.preventDefault();
  }
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" name="search">
          <div className="search__form-container">
            <input
              className="search__input"
              type="text"
              name="search-movies"
              placeholder="Фильм"
              required
            />
            <button
              className="search__submit-btn button"
              type="submit"
              aria-label="Кнопка поиска фильмов"
              onClick={handleSubmit}
            >
              Найти
            </button>
          </div>
          <div className='search__checkbox-container'>
            <FilterCheckbox />
          </div>
        </form>
      </div>
    </section>
  );
}
export default SearchForm;
