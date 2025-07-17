import React, { useEffect, useState } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import './Search.css';


const formatDate = (releaseDate) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit'};
  return new Date(releaseDate).toLocaleDateString('en-US', options);
};

const MovieCarousel = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=b1a89f5ff7960aa54d49123a25d03503&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie, id) => (
            <Link key={`movie-${id}`} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
              <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.original_title} />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                <div className="posterImage__runtime">
                  {movie ? formatDate(movie.release_date) : ""}
                      <span className="posterImage__rating">
                      <span className="carousel-star">&#9733;</span>{" "}
                  {movie ? movie.vote_average.toFixed(1) : " "}
                  </span>
                </div>
                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default MovieCarousel;
