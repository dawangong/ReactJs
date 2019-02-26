import { createStore } from 'redux';
import combineReducers from './reducer.js';

const store = createStore(combineReducers);

export default store;