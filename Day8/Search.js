import React from "react";
import MovieList from './MovieList';
import './Search.css';
import MovieCarousel from "./MovieCarousel";

const Search = () => {
 
  return (
    <>
      <div className="carousel-container">
        <div className="poster">
          <MovieCarousel />
          <MovieList />
        </div>
      </div>
    </>
  );
};

export default Search;

