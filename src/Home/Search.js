import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../Movie/MovieCard";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Search.css';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('mad');
  const [popularMovies, setPopularMovies] = useState([]);
  const { type } = useParams();

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

  const getData = useCallback(() => {
    const popularMoviesURL =`https://api.themoviedb.org/3/discover/movie?api_key=b1a89f5ff7960aa54d49123a25d03503&language=en-US&sort_by=popularity.desc&with_origin_country=AU`; 
    const popularRequest = fetch(popularMoviesURL).then((res) => res.json());   
    Promise.all([popularRequest])
      .then((results) => {
        const [movieData] = results;
        setPopularMovies(movieData.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [type]);

  useEffect(() => {
    getData();
  }, [type, getData]);

  return (
    
    <div className="dashboard-container">
      <div className="search-container">
        <h2>Welcome ,</h2>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="movies-container">
        {filteredMovies.map((movie) => (
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
          <div className="movie-card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>Ratings: <span className="dashb-star">&#9733;</span> {movie.vote_average.toFixed(1)}</p>
              <p>Release: {formatDate(movie.release_date)}</p>
              {favorites.find((fav) => fav.id === movie.id) ? (
                <button onClick={(e) => { e.preventDefault(); 
                    handleRemoveFromFavorites(movie);
                  }} className="rem">
                    &#10084; Remove from Favorites
                  </button>
              ) : (
                <button onClick={(e) => { e.preventDefault();  handleAddToFavorites(movie)} 
                }className='add'>
                  &#10084; Add to Favorites
                </button>)}
            </div>
          </div>
      </Link>))}
      </div>
      <div className="pop-list">
        <h2 className="pop-title">{(type ? type : "popular searches").toUpperCase()}</h2>
          <div className="pop-cards">
            {popularMovies && popularMovies.length > 0 && popularMovies.map((pop) => (
            <MovieCard key={pop.id} movie={pop} />))}
        </div>
      </div>
    </div>
  );
};

export default Search;