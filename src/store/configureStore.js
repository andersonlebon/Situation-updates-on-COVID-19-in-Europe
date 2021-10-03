import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import casesReducer from './casesSlice/case';

export const reducer = combineReducers({
  casesReducer,
});

const store = configureStore({
  reducer,
});

export default store;
