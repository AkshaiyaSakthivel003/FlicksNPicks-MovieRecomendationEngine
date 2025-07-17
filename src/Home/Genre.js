import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../Movie/MovieCard';
import './Genre.css';

const Genre = () => {
  const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 878, name: 'Sci-Fi' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
  ];

  const [selectedGenre, setSelectedGenre] = useState('0');
  const [movies, setMovies] = useState([]);
  const apiKey = 'b1a89f5ff7960aa54d49123a25d03503';

  const handleGenreChange = async (genreId) => {
    setSelectedGenre(genreId);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  return (
    <div className="genre-container">
      <h1 className="title">Browse Movies by Genre</h1>

      <div className="genres">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className={`genre-box ${selectedGenre === genre.id.toString() ? 'selected' : ''}`}
            onClick={() => handleGenreChange(genre.id.toString())}
          >
            {genre.name}
          </div>
        ))}
      </div>

      {movies.length > 0 && (
        <div className="find-genre">
          <h2>Movies in {genres.find((genre) => genre.id === parseInt(selectedGenre))?.name} Genre:</h2>
          <ul>
            {movies.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Genre;
