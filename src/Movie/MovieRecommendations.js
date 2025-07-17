import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './MovieRecommendations.css';

const MovieRecommendations = ({ recommendations }) => {
  const navigate = useNavigate(); 

  const handleMovieClick = (movieName) => {
    navigate(`/movies/${movieName}`); 
  };

  return (
    <div className="movie-recommendations-container">
      <h2>Recommended Movies</h2>
      <div className="movie-recommendations">
        {recommendations.map((movie) => (
          <div
            key={movie.id}
            className="recommended-movie"
            onClick={() => handleMovieClick(movie.original_title)}
            style={{ cursor: 'pointer' }}
          >
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} /> {/* Wrap the URL in backticks */}
            <p>{movie.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRecommendations;
