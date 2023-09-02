import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import api from '../../utils/MoviesApi';

function Movies() {
  // временное решение для вёрстки
  const [testMovies, setTestMovies] = useState([]);
  function makeRequest() {
    return api.getMovies().then(setTestMovies);
  }
  useEffect(() => {
    makeRequest();
  });
  return (
    <main>
      <SearchForm />
      <MoviesCardList testMovies={testMovies}/>
    </main>
  );
}
export default Movies;
