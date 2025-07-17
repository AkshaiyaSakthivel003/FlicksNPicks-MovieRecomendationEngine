// MovieComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMovieToFavorites,
  removeMovieFromFavorites,
  addMovieToWatchlist,
  removeMovieFromWatchlist,
  selectFavorites,
  selectWatchlist,
} from './movieSlice';
import './MovieComponent.css';

const MovieComponent = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const watchlist = useSelector(selectWatchlist);

  const sampleMovie = { id: 1, title: 'Sample Movie' };

  const handleAddToFavorites = () => {
    dispatch(addMovieToFavorites(sampleMovie));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeMovieFromFavorites(sampleMovie.id));
  };

  const handleAddToWatchlist = () => {
    dispatch(addMovieToWatchlist(sampleMovie));
  };

  const handleRemoveFromWatchlist = () => {
    dispatch(removeMovieFromWatchlist(sampleMovie.id));
  };

  return (
    <div className="movie-container">
      <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${sampleMovie.poster_path}`} alt={sampleMovie.title} />
        <div className="movie-details">
          <h2>{sampleMovie.title}</h2>
          <p>Rate: {sampleMovie.vote_average}</p>
          <p>Year: {sampleMovie.release_date}</p>
          <button onClick={handleAddToFavorites} className="btn">
            &#10084; Add to Favorites
          </button>
          <button onClick={handleRemoveFromFavorites} className="btn">
            &#128148; Remove from Favorites
          </button>
          <button onClick={handleAddToWatchlist} className="btn">
            &#9654; Add to Watchlist
          </button>
          <button onClick={handleRemoveFromWatchlist} className="btn">
            &#10008; Remove from Watchlist
          </button>
        </div>
      </div>

      <div>
        <h2>Favorites:</h2>
        {favorites.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>

      <div>
        <h2>Watchlist:</h2>
        {watchlist.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  );
};

export default MovieComponent;
