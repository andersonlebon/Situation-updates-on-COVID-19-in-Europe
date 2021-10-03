/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://covid-api.mmediagroup.fr/v1/cases/';

export const getCases = async (dispatch, continent, action) => {
  try {
    const { data } = await axios.get(`${baseURL}?continent=${continent}`);
    const countryValues = Object.values(data).map((country) => country.All);
    const countries = countryValues.map((acase) => ({
      confirmed: acase.confirmed,
      country: acase.country,
    }));
    return dispatch(action(countries));
  } catch (error) {
    return dispatch({ error });
  }
};
export const getCountryCases = async (dispatch, country, action) => {
  try {
    const { data } = await axios.get(`${baseURL}?country=${country}`);
    const twons = [];

    for (const key in data) {
      if (key !== 'All') {
        const newTwon = {
          name: key,
          confirmed: data[key].confirmed,
        };
        twons.push(newTwon);
      }
    }
    return dispatch(action({ twons, All: data.All }));
  } catch (error) {
    return dispatch(action({ error }));
  }
};
const slice = createSlice({
  name: 'cases',
  initialState: {
    cases: [],
    currentCountry: { All: {}, twons: [] },
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
