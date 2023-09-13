import './FilterCheckbox.css';

function FilterCheckbox({ onShorts }) {
  return (
    <label className="filter" htmlFor="checkbox">
      <input
        className="filter__checkbox"
        type="checkbox"
        id="checkbox"
        onChange={onShorts}
      />
      <span
        className='button filter__slider'
      />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
