// HOOK
import { useState, useEffect } from 'react';
// COMPONENT
import MovieCard from '../../components/MovieCard/MovieCard';
// CSS
import '../MovieGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      setTopMovies(data.results);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className='container1'>
      <h2 className='title'>Top Films</h2>
      <div className='movies-container row'>
        {topMovies.length === 0 && <p>Loading...</p>}
        {topMovies.length > 0 && 
          topMovies.map((movie) => (
            <div key={movie.id} className='col-md-4 mb-4'>
              <MovieCard movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
