import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import Genre from './Genre';
import Favorites from './Favorites';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [genreFilter, setGenreFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('avengers');

  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=b1a89f5ff7960aa54d49123a25d03503&query=${searchTerm}`
      );
      if (response.data && response.data.results) {
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
        localStorage.setItem('movies', JSON.stringify(response.data.results));
      }
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  const handleGenreChange = (event) => {
    setGenreFilter(event.target.value);
    if (event.target.value === 'All') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.Type.includes(event.target.value)
      );
      setFilteredMovies(filtered);
    }
    localStorage.setItem('genreFilter', event.target.value);
  };

  const handleAddToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));
  };

  const handleRemoveFromFavorites = (movie) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== movie.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  
  const formatDate = (releaseDate) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit'};
    return new Date(releaseDate).toLocaleDateString('en-US', options);
  };

  return (
    
    <div className="dashboard-container">
      <div className="search-container">
        <h2>Welcome {movie},</h2>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
        <label htmlFor="genreFilter"> Filter By Genre :</label>
        <Genre genre={genreFilter} handleGenreChange={handleGenreChange} />
      </div>

      <div className="movies-container">
        {filteredMovies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={1000} height={400} />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>Ratings: <span className="dashb-star">&#9733;</span> {movie.vote_average.toFixed(1)}</p>
              <p>Release: {formatDate(movie.release_date)}</p>
              {favorites.find((fav) => fav.id === movie.id) ? (
                <button onClick={() => handleRemoveFromFavorites(movie)} className='rem'>
                  &#10084; Remove from Favorites
                </button>
              ) : (
                <button onClick={() => handleAddToFavorites(movie)} className='add'>
                  &#10084; Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* <Favorites favorites={favorites} handleRemoveFromFavorites={handleRemoveFromFavorites} /> */}
    </div>
  );
};

export default Dashboard;
