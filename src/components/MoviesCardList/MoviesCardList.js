import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import useResize from '../../hooks/useResize';
import {
  ENDPOINT_MOVIES,
  ENDPOINT_SAVED_MOVIES,
  MOVIES_DESKTOP_AMOUNT,
  MOVIES_DESKTOP_STEP,
  MOVIES_MOBILE_AMOUNT,
  MOVIES_MOBILE_STEP,
  MOVIES_TABLET_AMOUNT,
  PAGE_DESKTOP,
  PAGE_TABLET,
} from '../../utils/constants';

function MoviesCardList({
  movies,
  errorMessage,
  onSavedMovie,
  onDeleteMovie,
  savedMovies,
}) {
  const width = useResize();
  const { pathname } = useLocation();
  const [countMovies, setCountMovies] = useState(0);
  const [step, setStep] = useState(0);

  // показать больше фильмов
  function handleClickMore() {
    setCountMovies(countMovies + step);
  }
  useEffect(() => {
    if (width >= PAGE_DESKTOP) {
      setCountMovies(MOVIES_DESKTOP_AMOUNT);
      setStep(MOVIES_DESKTOP_STEP);
    }
    if (width > PAGE_TABLET && width < PAGE_DESKTOP) {
      setCountMovies(MOVIES_TABLET_AMOUNT);
      setStep(MOVIES_MOBILE_STEP);
    }
    if (width <= PAGE_TABLET) {
      setCountMovies(MOVIES_MOBILE_AMOUNT);
      setStep(MOVIES_MOBILE_STEP);
    }
  }, [width]);

  return (
    <>
      {errorMessage ? (
        <div className="movies-card-list__error-container">
          <span className="movies-card-list__text-error">{errorMessage}</span>
        </div>
      ) : (
        <section className="movies-card-list">
          <ul className="movies-card-list__container">
            {(pathname === ENDPOINT_SAVED_MOVIES)
            && movies.map(movie => (
                <MoviesCard
                movie={movie}
                key={movie.id || movie.movieId}
                pathname={pathname}
                onSavedMovie={onSavedMovie}
                onDeleteMovie={onDeleteMovie}
                savedMovies={savedMovies}
              />
            ))
            }
            {(pathname === ENDPOINT_MOVIES) && movies.map((movie, index) => (
              (index < countMovies)
              && <MoviesCard
                movie={movie}
                key={movie.id || movie.movieId}
                pathname={pathname}
                onSavedMovie={onSavedMovie}
                onDeleteMovie={onDeleteMovie}
                savedMovies={savedMovies}
              />
            ))}
          </ul>
          <div className="movies-card-list__more">
            {pathname === ENDPOINT_MOVIES && (movies.length > countMovies) && (
              <button
                className="movies-card-list__btn-more button"
                type="button"
                onClick={handleClickMore}
              >
                Ещё
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
}
export default MoviesCardList;
