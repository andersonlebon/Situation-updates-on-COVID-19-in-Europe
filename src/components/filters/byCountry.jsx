import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const FilterByCountry = ({ countries }) => (
  <ul>
    {countries.map((county) => (
      <li key={county}>
        <Link to={`/country/${county}`}>
          {county}
        </Link>
      </li>
    ))}
  </ul>
);

FilterByCountry.propTypes = {
  countries: propTypes.arrayOf(propTypes.string).isRequired,
};

export default FilterByCountry;
