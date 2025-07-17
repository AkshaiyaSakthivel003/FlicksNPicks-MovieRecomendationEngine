import React from 'react';
import './Search.css'; 

const MovieCarousel = ({ movies }) => {
  return (
    <div className="carousel">
      {movies.map((movie, id) => (
        <div key={`movie-${id}`} className="carousel-item">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} className="carousel-image" />
        </div>
      ))}
    </div>
  );
};

export default MovieCarousel;
