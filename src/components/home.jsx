/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllData, getAllDataSuccess } from '../store/casesSlice/case';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    getAllData(dispatch, getAllDataSuccess);
    // const { data } = await axios.get(baseURL);

    const { data } = await axios.get(
      'https://opendata.ecdc.europa.eu/covid19/nationalcasedeath_eueea_daily_ei/json/'
    );
    console.log(data);
  }, []);
  return (
    <div>
      <h1>home</h1>

      <h2> WELCOME TO Situation-updates-on-COVID-19-in-Europe</h2>
      <nav>
        <ul>
          <li>
            <Link to="location">location</Link>
          </li>
          <li>
            <Link to="Recents">Recents</Link>
          </li>
          <li>
            <Link to="Death">Death</Link>
          </li>
          <li>
            <Link to="cases">Cases</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
