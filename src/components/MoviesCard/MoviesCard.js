import './MoviesCard.css';
import { useState } from 'react';
import { URL_BEATFILM_MOVIES } from '../../utils/constants';

function MoviesCard({
  movie: {
    duration, trailerLink, image, nameRU,
  },
  pathname,
}) {
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  function convertDuration() {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return `${hours}ч ${minutes}м`;
  }
  function handleClick(evt) {
    evt.target.classList.toggle('movies-card__save-btn_active');
    setIsSavedMovie(!isSavedMovie);
  }
  return (
    <article className="movies-card">
      <div className="movies-card__container">
        <a
          href={trailerLink}
          className="movies-card__link"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <img
            className="movies-card__image"
            src={
              pathname === '/saved-movies'
                ? `${image}`
                : `${URL_BEATFILM_MOVIES}${image?.url}`
            }
            alt={nameRU}
          />
        </a>
        <div className="movies-card__description">
          <h2 className="movies-card__title">{nameRU}</h2>
          <span className="movies-card__subtitle">{convertDuration()}</span>
        </div>
        {pathname === '/saved-movies' && (
          <button
            className="movies-card__btn movies-card__btn-delete button"
            type="button"
            aria-label="Кнопка удалить"
          ></button>
        )}
        {pathname !== '/saved-movies'
          && (isSavedMovie ? (
            <button
              className="movies-card__btn movies-card__btn-save button"
              type="button"
              aria-label="Кнопка фильм сохранён"
              onClick={handleClick}
            ></button>
          ) : (
            <button
              className="movies-card__btn movies-card__btn-save button"
              type="button"
              aria-label="Кнопка сохранить"
              onClick={handleClick}
            >
              Сохранить
            </button>
          ))}
      </div>
    </article>
  );
}
export default MoviesCard;
