import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import './Search.css';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(MovieContext);

  const handleRemoveFromFavorites = (movie) => {
    removeFromFavorites(movie.id);
  };

  return (
    <div className="dashboard-container">
      <h2>User Favorites</h2>
      <div className="movies-container">
        {favorites.length > 0 ? ( 
          favorites.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={1000}
                  height={400}
                />
                <div className="movie-details">
                  <h2>{movie.title}</h2>
                  <p>Rate: {movie.vote_average}</p>
                  <p>Year: {movie.release_date}</p>
                  <button onClick={(e) => {
                    e.preventDefault(); 
                    handleRemoveFromFavorites(movie);
                  }} className="rem">
                    &#10084; Remove from Favorites
                  </button>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
