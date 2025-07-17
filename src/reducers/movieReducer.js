import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    ADD_TO_WATCHLIST,
    REMOVE_FROM_WATCHLIST,
    SET_USERNAME,
  } from '../actions/movieActions';
  
  const initialState = {
    favorites: [],
    watchlist: [],
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_FAVORITES:
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case REMOVE_FROM_FAVORITES:
        return {
          ...state,
          favorites: state.favorites.filter(movie => movie.id !== action.payload),
        };
      case ADD_TO_WATCHLIST:
        return {
            ...state,
            watchlist: [...state.watchlist, action.payload],
        };
        case REMOVE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload),
            };
            
        case SET_USERNAME:
        {
            return action.payload;
        };

      default:
        return state;
    }
  };
  
  export default movieReducer;
  

// import { useContext } from 'react';
// import { MovieContext } from '../MovieProvider'; 

// const initialState = {
//   favorites: [],
//   watchlist: []
// };

// const movieReducer = (state = initialState, action) => {
//   const { favorites, setFavorites, watchlist, setWatchlist } = useContext(MovieContext);
//   switch (action.type) {
//     case 'ADD_TO_FAVORITES':
//       return {
//         ...state,
//         favorites: [...state.favorites, action.payload],
//       };
//     case 'REMOVE_FROM_FAVORITES':
//       return {
//         ...state,
//         favorites: state.favorites.filter((favorite) => favorite.id !== action.payload),
//       };
//     case 'ADD_TO_WATCHLIST':
//       return {
//         ...state,
//         watchlist: [...state.watchlist, action.payload],
//       };
//     case 'REMOVE_FROM_WATCHLIST':
//       return {
//         ...state,
//         watchlist: state.watchlist.filter((movie) => movie.id !== action.payload),
//       };
//     case 'SET_MOVIE':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default movieReducer;
