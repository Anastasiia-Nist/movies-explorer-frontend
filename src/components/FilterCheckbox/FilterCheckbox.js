import './FilterCheckbox.css';
import { useState } from 'react';

function FilterCheckbox() {
  const [isShortFilm, setIsShortFilm] = useState(false);
  function toogleeFilterCheckbox() {
    setIsShortFilm(!isShortFilm);
  }
  return (
    <label className="filter button" htmlFor="checkbox">
      <div className="filter__container">
        <input
          className="filter__checkbox"
          type="checkbox"
          id="checkbox"
          onChange={toogleeFilterCheckbox}
        />
        <span
          className={`filter__slider ${
            isShortFilm ? 'filter__slider_active' : ''
          }`}
        />
      </div>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
