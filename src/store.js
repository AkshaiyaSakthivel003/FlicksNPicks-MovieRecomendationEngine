import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const persistedState = JSON.parse(localStorage.getItem('reduxState')) || {};

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('reduxState', JSON.stringify(state));
});

export default store;

// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import movieReducer from './movieSlice';

// const store = configureStore({
//   reducer: {
//     movie: movieReducer,
//   },
// });

// export default store;  // Ensure 'store' is correctly exported
