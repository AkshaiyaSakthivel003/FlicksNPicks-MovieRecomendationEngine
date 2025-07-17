import React from "react";
import MovieList from '../Movie/MovieList';
import './Dashboard.css';
import MovieCarousel from "../Movie/MovieCarousel";

const Trending = () => {
 
  return (
    <>
      <div className="carousel-container">
        <div className="poster">
          <MovieList />
        </div>
      </div>
    </>
  );
};

export default Trending;

