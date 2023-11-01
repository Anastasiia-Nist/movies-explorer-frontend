import './FilterCheckbox.css';

function FilterCheckbox({ onChange, isShortMovies }) {
  return (
    <label className="filter" htmlFor="checkbox">
      <input
        className="filter__checkbox"
        type="checkbox"
        id="checkbox"
        onChange={onChange}
        checked={isShortMovies}
      />
      <span
        className='button filter__slider'
      />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
