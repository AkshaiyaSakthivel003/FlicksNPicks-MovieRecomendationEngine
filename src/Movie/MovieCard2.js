import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./MovieCard.css";

const MovieCard2 = ({ movieTitle }) => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=b1a89f5ff7960aa54d49123a25d03503&query=${encodeURIComponent(movieTitle)}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.results.length > 0) {
            setMovie(data.results[0]);
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setIsLoading(false);
      }
    }

    fetchMovieData();
  }, [movieTitle]);

  // May, 09 => For Card
  const formatDate = (releaseDate) => {
    const options = { month: "short", day: "2-digit" };
    return new Date(releaseDate).toLocaleDateString("en-US", options);
  };
const movieName=localStorage.getItem("movieName");
  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        movie && (
          <Link to={`/movies/${movieName}`} style={{ textDecoration: "none", color: "white" }}>
            <div className="cards">
              <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
              <div className="cards__overlay">
                <div className="card__title">{movie.original_title}</div>
                <div className="card__runtime">
                  {formatDate(movie.release_date)}
                  <span className="card__rating">
                    <span className="card-star">&#9733;</span>{" "}
                    {movie.vote_average ? movie.vote_average.toFixed(1) : ""}
                  </span>
                </div>
                <div className="card__description">{movie.overview.slice(0, 118) + "..."}</div>
              </div>
            </div>
          </Link>
        )
      )}
    </>
  );
};

export default MovieCard2;
