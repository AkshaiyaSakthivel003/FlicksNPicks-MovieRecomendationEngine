import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
  favorites: movieReducer,
});

export default rootReducer;
