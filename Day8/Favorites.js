import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './actions/movieActions';
import './Dashboard.css';

const Favorites = () => {
  const favoriteMovies = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleRemove = (movie) => {
    dispatch(removeFromFavorites(movie.id));
  };

  return (
    <div className="dashboard-container">
      <h2>User Favorites</h2>
      <ul>
        <div className="movies-container">
          {favoriteMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
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
                <button onClick={() => handleRemove(movie)} className="rem">
                  &#10084; Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Favorites;
