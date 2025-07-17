import React from 'react';
import './comp.css';

const MovieList = ({ movies, onRemoveMovie }) => {
  return (
    <div className=''>
      <h2>Movie List:</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} 
            <button onClick={() => onRemoveMovie(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
