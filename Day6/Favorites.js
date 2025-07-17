import React from 'react';
import './Dashboard.css';

const Favorites = ({ favorites, handleRemoveFromFavorites }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <ul>
        <div className="movies-container">
          {favorites.map((movie) => (
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
                <button onClick={() => handleRemoveFromFavorites(movie)} className="rem">
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
