import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import './MovieDetails.css';
import FeedbackList from './UserReview';
import MovieRecommendations from './MovieRecommendations';

const MovieBackdrop = ({ backdropPath }) => ( 
  <div className="movie__intro">
    <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${backdropPath}`} alt="Movie Backdrop" />
  </div>
);

const MoviePoster = ({ posterPath }) => (
  <div className="movie__posterBox">
    <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${posterPath}`} alt="Movie Poster" />
  </div>
);

const MovieDetailInfo = ({ movie }) => {
  const formattedVoteAverage = movie && movie.vote_average !== undefined && movie.vote_average !== null ? `${movie.vote_average.toFixed(2)} ` : '';
  const formattedReleaseDate = movie ? new Date(movie.release_date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
  const formattedRuntime = movie ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min` : '';

  return (
    <div className="movie__detailRightTop">
      <div className="movie__name">{movie?.original_title || ''}</div>
      <div className="movie__tagline">{movie?.tagline || ''}</div>
      <div className="movie__rating">
        {formattedVoteAverage}<i className="fas fa-star" />
      </div>
      <div className="movie__runtime">{formattedRuntime}</div>
      <div className="movie__releaseDate">{formattedReleaseDate}</div>
      <div className="movie__genres">
        {movie && movie.genres
          ? movie.genres.map((genre) => (
              <span className="movie__genre" key={genre.id}>
                {genre.name}
              </span>
            ))
          : ''}
      </div>
    </div>
  );
};

const MovieSynopsis = ({ overview }) => (
  <div className="movie__detailRightBottom">
    <div className="synopsisText">SYNOPSIS</div>
    <div>{overview || ''}</div>
  </div>
);

const MovieActions = ({ isFavorite, handleToggleFavorite }) => (
  <div className="handle-favourite">
    <button onClick={handleToggleFavorite} className={isFavorite ? 'rem' : 'add'}>
      &#10084; {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  </div>
);

const ProductionCompanies = ({ movie }) => {
    <div className="movie__production">
      {movie &&
        movie.production_companies &&
        movie.production_companies.map((company) => (
          <div key={company.id} className="productionCompanyImage">
            <img
              className="movie__productionCompany"
              src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
              alt="Production Company"
              height={50}
              width={250}
            />
            <span>{company.name}</span>
          </div>
        ))}
    </div>
};

const MovieTrailers = ({ trailers }) => {
  return (
    <div className="movie__trailers">
      <div className="trailer-list">
        {trailers.map((trailer) => (
          <div key={trailer.key} className="trailer">
            <iframe
              title="Trailer"
              width="280"
              height="157.5"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieStreamingWebsites = ({ id }) => {
  const [streamingWebsites, setStreamingWebsites] = useState([]);

  useEffect(() => {
    const fetchStreamingWebsites = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=b1a89f5ff7960aa54d49123a25d03503`
        );
        const providers = response.data?.results?.US?.flatrate || [];
        setStreamingWebsites(providers);
      } catch (error) {
        console.error('Error fetching streaming websites:', error);
        setStreamingWebsites([]);
      }
    };

    fetchStreamingWebsites();
  }, [id]);

  return (
    <div className="stream__website">
      {streamingWebsites.map((provider, id) => (
        <div key={id} className="stream-card">
          <div className="stream-logo">
            <img src={`https://image.tmdb.org/t/p/original${provider.logo_path}`} alt="Provider Logo" />
          </div>
          <h3>{provider.provider_name}</h3>
        </div>
      ))}
    </div>
  );
};

const MovieCast = ({ id }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b1a89f5ff7960aa54d49123a25d03503`);
        const castData = response.data.cast || [];
        setCast(castData);
      } catch (error) {
        console.error('Error fetching cast:', error);
        setCast([]);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <div className="movie__cast">
      <div className="cast__list">
        {cast.map((actor) => (
          <div key={actor.id} className="cast__item">
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={`${actor.name} profile`}
            />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TrailerBackdrop = ({ trailerKey }) => {
  if (!trailerKey) {
    return null;
  }

  return (
    <div className="trailer__backdrop">
      <iframe
        title="Trailer"
        width="1500px"
        height="700px"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&vq=hd1080`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

const UserScore = ({ movie }) => {
  const [userScorePercentage, setUserScorePercentage] = useState(0);

  const fetchUserScore = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=b1a89f5ff7960aa54d49123a25d03503`
      );
      const userScore = response.data?.vote_average || 0;
      const percentage = (userScore / 10) * 100;
      setUserScorePercentage(percentage);
    } catch (error) {
      console.error('Error fetching user score:', error);
    }
  };

  useEffect(() => {
    if (movie) {
      fetchUserScore();
    }
  }, [movie]);


  return (
    <div className="user-score">
      <h2>User Score</h2>
      <svg className="circle-progress" width="100" height="100">
        <circle
          className="circle-progress-bar"
          strokeWidth="10"
          stroke="#3498db"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
          style={{ strokeDasharray: `${userScorePercentage}, 100` }}
        />
      </svg>
      <div className="user-score-text">{userScorePercentage.toFixed(1)}%</div>
    </div>
  );
};

const Feedback = () => {
  const feedbackData = [
    {
      user: "Akshaiya S",
      date: "01/04/2023",
      feedback: "Average plot and worst screenplay.",
      liked: false,
    },
    {
      user: "Harini S",
      date: "01/02/2023",
      feedback: "Boring and lenghthy movie.",
      liked: false,
    },
    {
      user: "Sneha RS",
      date: "01/03/2023",
      feedback: "Good cast but direction could have been better.",
      liked: false,
    },
  ];

  const [comments, setComments] = useState(feedbackData);

  const handleLike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].liked = !updatedComments[index].liked;
    setComments(updatedComments);
  };

  useEffect(() => {
    const updatedComments = [...comments];
    updatedComments.forEach((comment, index) => {
      const localStorageKey = `comment_${index}`;
      const repliedText = localStorage.getItem(localStorageKey);
      if (repliedText) {
        comment.repliedText = repliedText;
      }
    });
    setComments(updatedComments);
  }, []);

  return (
    <div className="comment-box">
      {comments.map((comment, index) => (
        <div key={index} className="feedback-card">
          <div className="user-info">
            <div className="user-details">
              <h3>{comment.user}</h3>
              <p>Posted on {comment.date}</p>
            </div>
          </div>
          <div className="user-feedback">
            <p>{comment.feedback}</p>
            {comment.liked && (
              <span className="like-heart" role="img" aria-label="Heart">
                ❤️
              </span>
            )}
          </div>
          {comment.repliedText && (
            <div className="replied-text">
              <p>Replied: {comment.repliedText}</p>
            </div>
          )}
          <div className="actions">
            <button
              className={`like-button ${comment.liked ? "liked" : ""}`}
              onClick={() => handleLike(index)}
            >
              Like
            </button>
            <button
              className="reply-button"
              onClick={() => {
                const repliedText = prompt("Enter your reply:");
                if (repliedText) {
                  const updatedComments = [...comments];
                  updatedComments[index].repliedText = repliedText;
                  localStorage.setItem(`comment_${index}`, repliedText);
                  setComments(updatedComments);
                }
              }}
            >
              Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const MovieDetails2 = () => {
  const { movieName } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailers, setTrailers] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [userScorePercentage, setUserScorePercentage] = useState(0);
  const [streamingWebsites, setStreamingWebsites] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=b1a89f5ff7960aa54d49123a25d03503&query=${encodeURIComponent(movieName)}`
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
  }, [movieName]);
  

  useEffect(() => {
    const fetchTrailerKey = async (id) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b1a89f5ff7960aa54d49123a25d03503`
        );
        const trailers = response.data?.results || [];
        const firstTrailer = trailers.find((trailer) => trailer.site === 'YouTube');
        return firstTrailer?.key;
      } catch (error) {
        console.error('Error fetching trailer key:', error);
        return null;
      }
    };

    const fetchTrailer = async () => {
      if (movie) {
        const fetchedTrailerKey = await fetchTrailerKey(movie.id);
        setTrailerKey(fetchedTrailerKey);
      }
    };

    fetchTrailer();
  }, [movie]);

  const fetchUserScore = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b1a89f5ff7960aa54d49123a25d03503`
      );
      const userScore = response.data?.vote_average || 0;
      const percentage = (userScore / 10) * 100;
      setUserScorePercentage(percentage);
    } catch (error) {
      console.error('Error fetching user score:', error);
    }
  };

  useEffect(() => {
    if (movie) {
      fetchUserScore(movie.id);
    }
  }, [movie]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleToggleFavorite = () => {
  const isCurrentlyFavorite = favorites.find((fav) => fav.id === movie?.id);
  let updatedFavorites = [];
  if (isCurrentlyFavorite) {
    updatedFavorites = favorites.filter((fav) => fav.id !== movie?.id);
  } else {
    updatedFavorites = [...favorites, movie];
  }

  setFavorites(updatedFavorites);
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};

  const handleHomepageClick = () => {
    if (movie && movie.homepage) {
      window.open(movie.homepage, "_blank");
    }
  };

  const handleIMDBClick = () => {
    if (movie && movie.imdb_id) {
      window.open(`https://www.imdb.com/title/${movie.imdb_id}`, "_blank");
    }
  };

  useEffect(() => {
    
    const fetchRecommendations = async (movieId) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=b1a89f5ff7960aa54d49123a25d03503`
        );
        const recommendedMovies = response.data.results || [];
        setRecommendations(recommendedMovies);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setRecommendations([]);
      }
    };

    if (movie) {
      fetchRecommendations(movie.id);
    }
  }, [movie]);


  return (
    <>
    {movieName && (
    <div className="movie__details">
      {isLoading && <p>Loading...</p>}
      {!isLoading && movie ? (
        <>
        <div className="movie">
          <MovieBackdrop backdropPath={movie.backdrop_path} />
          {/* <TrailerBackdrop trailerKey={trailerKey} /> */}
          <div className="movie__detail">
          <div className="movie__detailLeft">
            <MoviePoster posterPath={movie.poster_path} />
            </div>

            <div className="movie__detailRight">
              <MovieDetailInfo movie={movie} />
              <MovieSynopsis overview={movie.overview} />
              <div className="mcont">
              <div className="mcard" key={movie?.id}>
              <MovieActions
                isFavorite={favorites.find((fav) => fav.id === movie?.id)}
                handleToggleFavorite={handleToggleFavorite}
              />
             <div className="user-score">
                  <UserScore movie={movie} />
              </div>
            </div>
          </div>
          </div></div>

        <div className="movie__links">
        <div className="link__heading">Links</div>
        {movie && movie.homepage && (
          <div onClick={handleHomepageClick} style={{ cursor: 'pointer', textDecoration: 'none' }}>
            <p>
              <span className="movie__homeButton">Homepage </span>
            </p>
          </div>
        )}
        {movie && movie.imdb_id && (
          <div onClick={handleIMDBClick} style={{ cursor: 'pointer', textDecoration: 'none' }}>
            <p>
              <span className="movie__imdbButton">IMDb</span>
            </p>
          </div>
        )}
        <div>
      </div></div>

      <div className="stream__heading">Streaming In
      <div className='stream'>
          <MovieStreamingWebsites id={movie.id} />
      </div></div>

      <div className="trailer__heading">Trailers & Clips
      <div className="trailer-list">
      <div className="trailer">
      <div className="trailer__card">
         <MovieTrailers trailers={trailers} />
      </div></div>
      </div></div>
      <div className='cast__heading'>
      <h2>Cast & Crew</h2>
          <MovieCast id={movie.id} />
      </div></div>

      <div className="comment-box2">
        <Feedback />
      </div>

      <div className="prod_company">Production Companies
          <ProductionCompanies movie={movie} />
          <MovieRecommendations recommendations={recommendations} />
      </div>
        </>
      ) : (
        <p>Movie not found.</p>
      )}
    </div>
    )}
 </>
  );
};

export default MovieDetails2;
