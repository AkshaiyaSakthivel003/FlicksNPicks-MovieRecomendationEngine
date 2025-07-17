import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './CrudMovie.css';


const CrudMovie2 = () => {
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
    const result = await axios.get('http://localhost:8080/api/movies2/get', config);
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
      <h2>DESI PICKS</h2>
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

export default CrudMovie2;
