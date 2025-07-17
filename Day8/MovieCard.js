import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // May, 09 => For Card
  const formatDate = (releaseDate) => {
    const options = { month: 'short', day: '2-digit' };
    return new Date(releaseDate).toLocaleDateString('en-US', options);
  };

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
          <div className="cards">
            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt={""} />
            <div className="cards__overlay">
              <div className="card__title">{movie ? movie.original_title : ""}</div>
              <div className="card__runtime">
                {movie ? formatDate(movie.release_date) : ""}
                    <span className="card__rating">
                    <span className="card-star">&#9733;</span>{" "}
                {movie ? movie.vote_average.toFixed(1) : " "}
                </span>
              </div>
              <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default MovieCard;
