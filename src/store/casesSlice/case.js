/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL =
  'https://opendata.ecdc.europa.eu/covid19/nationalcasedeath_eueea_daily_ei/json/';

export const getAllData = async (dispatch, action) => {
  try {
    const { data } = await axios.get(
      'https://opendata.ecdc.europa.eu/covid19/nationalcasedeath_eueea_daily_ei/json/'
    );
    const sentData = [];
    console.log(data);

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
    return dispatch({ type: 'erroreee', payload: error.message });
  }
};

const slice = createSlice({
  name: 'situationCOVID',
  initialState: [],
  reducers: {
    getAllDataSuccess: (state, action) => {
      state = [...action.payload];
    },
    getAllDataFailed: (state, action) => {
      return state;
    },
  },
});

export const { getAllDataSuccess, getAllDataFailed } = slice.actions;

export default slice.reducer;
