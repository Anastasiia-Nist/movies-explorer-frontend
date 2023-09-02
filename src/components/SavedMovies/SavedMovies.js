import { testSavedMovies } from '../../utils/constants'; // временное решение для вёрстки
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <main className='main'>
      <SearchForm />
      <MoviesCardList testMovies={testSavedMovies} />
    </main>
  );
}
export default SavedMovies;
