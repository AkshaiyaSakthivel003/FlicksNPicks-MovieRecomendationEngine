import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import axios from 'axios';
import './CrudMovie.css';

const CrudMovie = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const result = await axios.get('http://localhost:8080/api/movies/get', config);
    setMovies(result.data);
  };

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-crud">
      <div className="movie-crud-info">
        <h3>{movie.name}</h3>
        <p>Release Date: {movie.date}</p>
        <p>Rating: {movie.rating}</p>
        <p>Time: {movie.time}</p>
      </div>
    </div>
  );
};

  return (
    <div className="crudmovie-container">
      <div className="py-4">
      <h2>POPULAR RELEASES</h2>
        <div className="movie-crud-scroll-container">
          <div className="movie-crud-container">

            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudMovie;
