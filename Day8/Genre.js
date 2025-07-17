import React from 'react';

const Genre = ({ genre, handleGenreChange }) => {
  return (
    <select onChange={handleGenreChange} value={genre}>
      <option value="All">All</option>
      <option value="recent">Recent</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="shows">TV shows</option>
      <option value="action">Action</option>
      <option value="comedy">Comedy</option>
      <option value="thriller">Thriller</option>
      <option value="crime">Crime</option>
      <option value="horror">Horror</option>
      <option value="fantasy">Fantasy</option>
    </select>
  );
};

export default Genre;
