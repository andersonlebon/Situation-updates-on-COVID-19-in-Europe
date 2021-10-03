/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL =
  'https://opendata.ecdc.europa.eu/covid19/nationalcasedeath_eueea_daily_ei/json/';

export const getAllData = async (dispatch, continent, action) => {
  try {
    const { data } = await axios.get(`${baseURL}`);
    return dispatch(action(data.records));
  } catch (error) {
    return dispatch({ error });
  }
};

const slice = createSlice({
  name: 'cases',
  initialState: {
    cases: [],
    death: [],
    totalDeath: [],
    vaccinated: [],
  },
  reducers: {
    getCasesByContinent: (state, action) => {
      state.cases = [...action.payload];
    },
    getCasesByContry: (state, action) => {
      state.currentCountry = action.payload;
    },
  },
});

export const { getCasesByContinent, getCasesByContry } = slice.actions;

export default slice.reducer;
