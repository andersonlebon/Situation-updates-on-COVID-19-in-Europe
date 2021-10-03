import propTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import { getCases, getCasesByContinent } from '../store/casesSlice/case';
import TopHeader from './common/topHeader';
import Africa from '../images/afric4.png';
import America from '../images/america.svg';
import Asia from '../images/asia4.png';
import Europe from '../images/europe.png';
import Counter from './common/casesCounter';

const imgs = {
  Africa,
  America,
  Asia,
  Europe,
};

const Continent = ({ match, cases, history }) => {
  const dispatch = useDispatch();
  const handleGetCountry = (key) => {
    history.push(`/${match.params.continent}/${key}`);
  };

  useEffect(() => {
    getCases(dispatch, match.params.continent, getCasesByContinent);
  }, []);

  return (
    <section className="continent">
      <TopHeader history={history} text="Most views" />
      <div className="continent-header d-flex">
        <div className="continent-img w-50">
          <img
            className="w-100 h-100"
            src={imgs[match.params.continent]}
            alt="continent-img"
          />
        </div>
        <div className="continent-title w-50 d-flex flex-column pl-3 justify-content-center">
          <h2>{match.params.continent}</h2>
          <p>{`${Counter(cases)}`}</p>
        </div>
      </div>
      <div className="continent-country">
        <h3 className="p-2 text-small">STARTS BY COUNTRY</h3>
        <ul className="continentList">
          {cases.map((acase) => (
            <li
              onClick={() => handleGetCountry(acase.country)}
              key={acase.country}
              className="acontinent d-flex  align-items-end flex-column justify-content-between"
              aria-hidden
            >
              <button type="button" className="p-2 text-small">
                <BiRightArrowCircle />
              </button>
              <div className="bg">
                <img
                  className="w-100 h-100"
                  src={imgs[match.params.continent]}
                  alt="countryImg"
                />
              </div>
              <div className="cont-text d-flex p-2  align-items-end flex-column country-name">
                <h2>{acase.country}</h2>
                <p className="text-small">{acase.confirmed}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="tost">
        {cases.length === 0 ? 'No Information About this continent...' : null}
      </p>
    </section>
  );
};

Continent.propTypes = {
  cases: propTypes.arrayOf(propTypes.shape({})).isRequired,
  history: propTypes.arrayOf(propTypes.shape({})).isRequired,
  match: propTypes.shape({
    params: propTypes.shape({
      country: propTypes.string,
      continent: propTypes.string,
    }),
  }).isRequired,
};

export default Continent;
