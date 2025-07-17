import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>Genre: {movie.genre}</p>
        <p>Release Year: {movie.releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
