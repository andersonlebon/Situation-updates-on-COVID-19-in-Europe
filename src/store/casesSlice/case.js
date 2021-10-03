/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL =
  'https://opendata.ecdc.europa.eu/covid19/nationalcasedeath_eueea_daily_ei/json/';

export const getAllData = async (dispatch, continent, action) => {
  try {
    const { data } = await axios.get(`${baseURL}`);
    const sentData = [];

    data.records.forEach((element) => {
      const newData = {
        country: element.countriesAndTerritories,
        cases: '',
        deaths: [],
        totalDeath: [],
        vaccinated: [],
      };
      // newData.cases.push({ cases: element.cases, date: element.dateRep });
      // newData.deaths.push();

      sentData.push(newData);
    });
    return dispatch(action(sentData));
  } catch (error) {
    return dispatch(action(error));
  }
};

const slice = createSlice({
  name: 'cases',
  initialState: [],
  reducers: {
    getAllDataSuccess: (state, action) => {
      state.cases = [...action.payload];
    },
    getCasesByContry: (state, action) => {
      state.currentCountry = action.payload;
    },
  },
});

export const { getCasesByContinent, getCasesByContry } = slice.actions;

export default slice.reducer;
