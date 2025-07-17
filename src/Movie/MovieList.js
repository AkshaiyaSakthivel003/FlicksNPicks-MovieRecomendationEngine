import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [latestList, setLatestList] = useState([]);
  const [tvShowList, setTVShowList] = useState([]);
  const [streamList, setStreamList] = useState([]);
  const [kidList, setKidList] = useState([]);
  const [dramaList, setDramaList] = useState([]);
  const { type } = useParams();

  const getData = useCallback(() => { //b1a89f5ff7960aa54d49123a25d03503
    const popularMoviesURL = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=b1a89f5ff7960aa54d49123a25d03503&language=en-US`;
    const popularLatestURL = `https://api.themoviedb.org/3/discover/${type ? type : "movie"}?api_key=b1a89f5ff7960aa54d49123a25d03503&primary_release_year=2023&sort_by=vote_average.asc&vote_count.gte=100`;
    const popularTVShowsURL = `https://api.themoviedb.org/3/discover/${type ? type : "movie"}?api_key=b1a89f5ff7960aa54d49123a25d03503&language=en-US&sort_by=popularity.desc&with_origin_country=IN&with_genres=28`;
    const popularStreamURL = `https://api.themoviedb.org/3/discover/${type ? type : "tv"}?api_key=b1a89f5ff7960aa54d49123a25d03503&with_networks=213`;
    const popularKidURL = `https://api.themoviedb.org/3/discover/${type ? type : "movie"}?api_key=b1a89f5ff7960aa54d49123a25d03503&language=en-US&sort_by=popularity.desc&with_genres=16&with_companies=2&primary_release_date.gte=2013-01-01`;
    const popularDramaURL = `https://api.themoviedb.org/3/discover/${type ? type : "tv"}?api_key=b1a89f5ff7960aa54d49123a25d03503&language=en-US&sort_by=popularity.desc&with_genres=18&with_origin_country=KR`;

    const movieRequest = fetch(popularMoviesURL).then((res) => res.json());
    const latestRequest = fetch(popularLatestURL).then((res) => res.json());
    const tvShowRequest = fetch(popularTVShowsURL).then((res) => res.json());
    const streamRequest = fetch(popularStreamURL).then((res) => res.json());
    const kidRequest = fetch(popularKidURL).then((res) => res.json());
    const dramaRequest = fetch(popularDramaURL).then((res) => res.json());

    Promise.all([movieRequest, latestRequest, tvShowRequest, streamRequest, kidRequest, dramaRequest])
      .then((results) => {
        const [movieData, latestData, tvShowData, streamData, kidData, dramaData] = results;

        setMovieList(movieData.results);
        setLatestList(latestData.results);
        setTVShowList(tvShowData.results);
        setStreamList(streamData.results);
        setKidList(kidData.results);
        setDramaList(dramaData.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [type]);

  useEffect(() => {
    getData();
  }, [type, getData]);

  return (
    <div className="movie__list">
      <h2 className="list__title1">{(type ? type : "Premier movies").toUpperCase()}</h2>
      <div className="list__cards">
        {movieList && movieList.length > 0 && movieList.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
      <h2 className="list__title2">{(type ? type : "Latest Releases").toUpperCase()}</h2>
      <div className="list__cards">
        {latestList && latestList.length > 0 && 
        latestList.map((latest) => (
          <Link to={`/movie/${latest.id}`} key={latest.id}>
            <MovieCard movie={latest} />
          </Link>
        ))}
      </div>
      <h2 className="list__title2">{(type ? type : "Desi Picks").toUpperCase()}</h2>
      <div className="list__cards">
        {tvShowList && tvShowList.length > 0 && tvShowList.map((tvShow) => (
          <Link to={`/movie/${tvShow.id}`} key={tvShow.id}>
            <MovieCard movie={tvShow} />
          </Link>
        ))}
      </div>
      <h2 className="list__title2">{(type ? type : "Streaming in").toUpperCase()}</h2>
      <div className="list__cards">
        {streamList && streamList.length > 0 && streamList.map((stream) => (
          <Link to={`/movie/${stream.id}`} key={stream.id}>
            <MovieCard movie={stream} />
          </Link>
        ))}
      </div>
      <h2 className="list__title2">{(type ? type : "kids' corner").toUpperCase()}</h2>
      <div className="list__cards">
        {kidList && kidList.length > 0 && kidList.map((kid) => (
          <Link to={`/movie/${kid.id}`} key={kid.id}>
            <MovieCard movie={kid} />
          </Link>
        ))}
      </div>
      <h2 className="list__title2">{(type ? type : "drama delights").toUpperCase()}</h2>
      <div className="list__cards">
        {dramaList && dramaList.length > 0 && dramaList.map((drama) => (
          <Link to={`/movie/${drama.id}`} key={drama.id}>
            <MovieCard movie={drama} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
