import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCarousel from './MovieCarousel'; 
import './Search.css'; 

const Search = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b1a89f5ff7960aa54d49123a25d03503&language=en-US');
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-group">
        <h1>PREMIER STREAMING</h1>
        <MovieCarousel movies={movies} />
      </div>
    </div>
  );
};

export default Search;
