import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import "./MovieList.css";
import MovieCard2 from "./MovieCard2";
import MovieDetails2 from "./MovieDetails2";

const MovieList2 = () => {
  const [movies, setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [movies3, setMovies3] = useState([]);

  useEffect(() => {
    loadMovies();
    loadMovies2();
    loadMovies3();
  }, []);

  const loadMovies = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const result = await axios.get('http://localhost:8080/api/movies/get', config);
    setMovies(result.data);
  };

  const loadMovies2 = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const result = await axios.get('http://localhost:8080/api/movies2/get', config);
    setMovies2(result.data);
  };

  const loadMovies3 = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const result = await axios.get('http://localhost:8080/api/movies3/get', config);
    setMovies3(result.data);
  };

  const storeMovieName = (movieName) => {
    localStorage.setItem('movieName', movieName);
  };

  return (
    <div className="movie__list">
      <h2 className="list__title1">{("premier releases").toUpperCase()}</h2>
      <div className="list__cards">
        {movies && movies.length > 0 && movies.map((movie) => (
          <Link to={`/movie/${movie.name}`} key={movie.id} onClick={() => storeMovieName(movie.name)}>
            <MovieCard2 movieTitle={movie.name} />
          </Link>
        ))}
      </div>
      <h2 className="list__title2">{("desi picks").toUpperCase()}</h2>
      <div className="list__cards">
        {movies2 && movies2.length > 0 && movies2.map((movie) => (
          <Link to={`/movie/${movie.name}`} key={movie.id} onClick={() => storeMovieName(movie.name)}>
            <MovieCard2 movieTitle={movie.name} />
          </Link>
        ))}
      </div>
      <h2 className="list__title2">{("kids corner").toUpperCase()}</h2>
      <div className="list__cards">
        {movies3 && movies3.length > 0 && movies3.map((movie) => (
          <Link to={`/movie/${movie.name}`} key={movie.id} onClick={() => storeMovieName(movie.name)}>
            <MovieCard2 movieTitle={movie.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList2;
