import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ testMovies }) {
  const { pathname } = useLocation();
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        {testMovies.map(
          movie => (movie.id <= 12 || movie._id)
          && (
              <MoviesCard
                movie={movie}
                key={movie.id || movie.movieId}
                pathname={pathname}
              />
          ),
        )}
      </div>
      <div className="movies-card-list__more">
        {pathname === '/movies' && (
          <button className="movies-card-list__btn-more button">Ещё</button>
        )}
      </div>
    </section>
  );
}
export default MoviesCardList;
