import React, { useState, createContext, useEffect } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    setFavorites(storedFavorites);
    setWatchlist(storedWatchlist);
  }, []);

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
    localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));
  };

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
    localStorage.setItem('watchlist', JSON.stringify([...watchlist, movie]));
  };

  const removeFromWatchlist = (movieId) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        watchlist,
        addToWatchlist,
        removeFromWatchlist
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };