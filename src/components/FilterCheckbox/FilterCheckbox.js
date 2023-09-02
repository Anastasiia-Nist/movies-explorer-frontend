import './FilterCheckbox.css';
import { useState } from 'react';

function FilterCheckbox() {
  const [isShortFilm, setIsShortFilm] = useState(false);
  function toogleeFilterCheckbox() {
    setIsShortFilm(!isShortFilm);
  }
  return (
    <label className="filter" htmlFor="checkbox">
      <input
        className="filter__checkbox"
        type="checkbox"
        id="checkbox"
        onChange={toogleeFilterCheckbox}
      />
      <span
        className={`button filter__slider ${
          isShortFilm ? 'filter__slider_active' : ''
        }`}
      />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
