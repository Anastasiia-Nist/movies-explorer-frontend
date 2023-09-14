import './MoviesCard.css';
import { useEffect, useState, useContext } from 'react';
import { ENDPOINT_SAVED_MOVIES, URL_BEATFILM_MOVIES } from '../../utils/constants';
import CurrentUserContext from '../../context/CurrentUserContext';

function MoviesCard({
  movie,
  pathname,
  onSavedMovie,
  onDeleteMovie,
  savedMovies,
}) {
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  function convertDuration() {
    const minutes = movie.duration % 60;
    const hours = Math.floor(movie.duration / 60);
    return `${hours}ч ${minutes}м`;
  }
  useEffect(() => {
    savedMovies.forEach((card) => {
      if (card.movieId === movie.id) {
        setIsSavedMovie(true);
      }
    });
  }, [currentUser]);
  function toggleSavedCard(evt) {
    evt.target.classList.toggle('movies-card__save-btn_active');
    setIsSavedMovie(!isSavedMovie);
  }
  function onSave(evt) {
    onSavedMovie(movie, evt, toggleSavedCard);
  }

  function onDelete(evt) {
    onDeleteMovie(movie, evt, toggleSavedCard);
  }

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <a
          href={movie.trailerLink}
          className="movies-card__link"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <img
            className="movies-card__image"
            src={
              pathname === ENDPOINT_SAVED_MOVIES
                ? `${movie.image}`
                : `${URL_BEATFILM_MOVIES}${movie.image?.url}`
            }
            alt={`Постер к фильму ${movie.nameRU}`}
          />
        </a>
        <div className="movies-card__description">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <span className="movies-card__subtitle">{convertDuration()}</span>
        </div>
        {pathname === ENDPOINT_SAVED_MOVIES && (
          <button
            className="movies-card__btn movies-card__btn-delete button"
            type="button"
            aria-label="Кнопка удалить"
            onClick={onDelete}
          ></button>
        )}
        {pathname !== ENDPOINT_SAVED_MOVIES
          && (isSavedMovie ? (
            <button
              className="movies-card__btn movies-card__btn-save button movies-card__save-btn_active"
              type="button"
              aria-label="Кнопка фильм сохранён"
              onClick={onDelete}
            ></button>
          ) : (
            <button
              className="movies-card__btn movies-card__btn-save button"
              type="button"
              aria-label="Кнопка сохранить"
              onClick={onSave}
            >
              Сохранить
            </button>
          ))}
      </div>
    </li>
  );
}
export default MoviesCard;
