import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../actions/movieActions';
import MovieList from './MovieList';
import './comp.css';

const MovieRecommendationPage = () => {
  const [newMovieTitle, setNewMovieTitle] = useState('');
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    const newMovie = {
      id: Math.random(), 
      title: newMovieTitle
    };

    dispatch(addMovie(newMovie));
    setNewMovieTitle('');
  };

  return (
    <div className='mov-cont'>
      <form className='mov-form'>
      <h1>Movie Recommendation Page</h1>
      <input 
        type="text" 
        value={newMovieTitle} 
        onChange={(e) => setNewMovieTitle(e.target.value)} 
        placeholder="Enter a movie title" 
      />
      <button onClick={handleAddMovie}>Add Movie</button>
      <MovieList movies={movies} onRemoveMovie={(movieId) => dispatch(removeMovie(movieId))} />

      </form>
    </div>
  );
};

export default MovieRecommendationPage;
