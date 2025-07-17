import { createStore } from 'redux';
import rootReducer from './reducers';
import './sto.css';

const store = createStore(rootReducer);

export default store;
