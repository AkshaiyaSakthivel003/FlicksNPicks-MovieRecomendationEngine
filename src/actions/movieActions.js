export const SET_USERNAME = 'SET_USERNAME';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';

export const setMovie = (movie) => {
  return {
    type: SET_USERNAME,
    payload: movie,
  };
};
export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});

export const addToWatchlist = (movie) => ({
  type: ADD_TO_WATCHLIST,
  payload: movie,
});

export const removeFromWatchlist = (movieId) => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: movieId,
});


// import React, { useContext } from 'react';
// import { MovieContext } from '../MovieProvider'; // Update the import

// const addToFavorites = (movie) => {
//   const { favorites, setFavorites } = useContext(MovieContext);
//   const updatedFavorites = [...favorites, movie];
//   setFavorites(updatedFavorites);
//   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
// };

// const removeFromFavorites = (movieId) => {
//   const { favorites, setFavorites } = useContext(MovieContext);
//   const updatedFavorites = favorites.filter((favorite) => favorite.id !== movieId);
//   setFavorites(updatedFavorites);
//   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
// };

// const addToWatchlist = (movie) => {
//   const { watchlist, setWatchlist } = useContext(MovieContext);
//   const updatedWatchlist = [...watchlist, movie];
//   setWatchlist(updatedWatchlist);
//   localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
// };

// const removeFromWatchlist = (movieId) => {
//   const { watchlist, setWatchlist } = useContext(MovieContext);
//   const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
//   setWatchlist(updatedWatchlist);
//   localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
// };

// export { addToFavorites, removeFromFavorites, addToWatchlist, removeFromWatchlist };
