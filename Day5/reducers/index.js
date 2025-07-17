import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import './red.css';

const rootReducer = combineReducers({
  movies: movieReducer
});

export default rootReducer;
