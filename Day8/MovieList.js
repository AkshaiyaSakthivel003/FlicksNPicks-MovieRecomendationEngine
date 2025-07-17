import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [latestList, setLatestList] = useState([]);
  const [tvShowList, setTVShowList] = useState([]);
  const [streamList, setStreamList] = useState([]);
  const [kidList, setKidList] = useState([]);
  const [dramaList, setDramaList] = useState([]);
  const { type } = useParams();

  const getData = useCallback(() => {   //b1a89f5ff7960aa54d49123a25d03503

    const popularMoviesURL = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=b1a89f5ff7960aa54d49123a25d03503&language=en-US`;
    const popularLatestURL = ``;
    const popularTVShowsURL = `https://api.themoviedb.org/3/discover/movie?api_key=b1a89f5ff7960aa54d49123a25d03503&language=en-US&sort_by=popularity.desc&with_origin_country=IN`;
    const popularStreamURL = `https://api.themoviedb.org/3/discover/tv?api_key=b1a89f5ff7960aa54d49123a25d03503&with_networks=213`;
    const popularKidURL = `https://api.themoviedb.org/3/discover/movie?api_key=b1a89f5ff7960aa54d49123a25d03503&language=en-US&sort_by=popularity.desc&with_genres=16&with_companies=2&primary_release_date.gte=2013-01-01`;
    const popularDramaURL = `https://api.themoviedb.org/3/discover/tv?api_key=b1a89f5ff7960aa54d49123a25d03503&language=en-US&sort_by=popularity.desc&with_genres=18&with_origin_country=KR`;

    const movieRequest = fetch(popularMoviesURL).then((res) => res.json());
    const latestRequest = fetch(popularLatestURL).then((res) => res.json());
    const tvShowRequest = fetch(popularTVShowsURL).then((res) => res.json());
    const streamRequest = fetch(popularStreamURL).then((res) => res.json());
    const kidRequest = fetch(popularKidURL).then((res) => res.json());
    const dramaRequest = fetch(popularDramaURL).then((res) => res.json());

    Promise.all([movieRequest,latestRequest, tvShowRequest, streamRequest, kidRequest, dramaRequest])
      .then((results) => {
        const [movieData,latestData, tvShowData, streamData, kidData, dramaData] = results;

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
        <MovieCard key={movie.id} movie={movie} />
      ))}
      </div>
    <h2 className="list__title2">{(type ? type : "Latest Releases").toUpperCase()}</h2>
    <div className="list__cards">
      {latestList && latestList.length > 0 && latestList.map((latest) => (
        <MovieCard key={latest.id} movie={latest} />
      ))}
    </div>
    <h2 className="list__title2">{(type ? type : "Desi Picks").toUpperCase()}</h2>
    <div className="list__cards">
      {tvShowList && tvShowList.length > 0 && tvShowList.map((tvShow) => (
        <MovieCard key={tvShow.id} movie={tvShow} />
      ))}
    </div>
    <h2 className="list__title2">{(type ? type : "Streaming in").toUpperCase()}</h2>
    <div className="list__cards">
      {streamList && streamList.length > 0 && streamList.map((stream) => (
        <MovieCard key={stream.id} movie={stream} />
      ))}
    </div>
    <h2 className="list__title2">{(type ? type : "kids' corner").toUpperCase()}</h2>
    <div className="list__cards">
      {kidList && kidList.length > 0 && kidList.map((kid) => (
        <MovieCard key={kid.id} movie={kid} />
      ))}
    </div>
    <h2 className="list__title2">{(type ? type : "drama delights").toUpperCase()}</h2>
    <div className="list__cards">
      {dramaList && dramaList.length > 0 && dramaList.map((drama) => (
        <MovieCard key={drama.id} movie={drama} />
      ))}
    </div>
  </div>
);

};

export default MovieList;
