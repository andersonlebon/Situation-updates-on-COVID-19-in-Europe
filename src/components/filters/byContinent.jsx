import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import TopHeader from '../common/topHeader';

const continents = ['Africa', 'America', 'Europe', 'Asia'];

const FilterByCont = ({ history }) => (
  <section className="d-flex flex-column justify-content-center align-items-center section-continent">
    <TopHeader history={history} text="Select continent" />
    <ul className="list-group f-continent">
      {continents.map((continent) => (
        <li className="list-group-item" key={continent}>
          <Link className=" cont-link w-100" to={`/continent/${continent}`}>
            {continent}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

// FilterByCont.propTypes = {
//   history: propTypes.arrayOf(propTypes.shape({})).isRequired,
// };

export default FilterByCont;
