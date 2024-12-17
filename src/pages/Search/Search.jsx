//HOOKS
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// COMPONENT
import MovieCard from '../../components/MovieCard/MovieCard';
// CSS
import '../MovieGrid.css';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('q');
  const getSearchedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.results);
    } catch (error) {
      console.error('erro', error);
    }
  };
  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className='container1'>
      <h2 className='title'>
        Results for: <span className='query-text'>"{query}"</span>
      </h2>
      <div className='movies-container row'>
        {movies.length === 0 && <p>Nada Encontrado, Volte por <a href='/'>aqui...</a></p>}
        {movies.length > 0 &&
          movies.map((movie) => (
            <div key={movie.id} className='col-md-4 mb-4'>
              <MovieCard key={movie.id} movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
