/* eslint-disable react-hooks/exhaustive-deps */
import propTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import Africa from '../images/afric4.png';
import America from '../images/america.svg';
import Asia from '../images/asia4.png';
import Europe from '../images/europe.png';
import { getCasesByContry, getCountryCases } from '../store/casesSlice/case';
import TopHeader from './common/topHeader';

const imgs = {
  Africa,
  America,
  Asia,
  Europe,
};

const Country = ({ match, history, cases }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCountryCases(dispatch, match.params.country, getCasesByContry);
  }, []);
  return (
    <section className="contry-container">
      <TopHeader history={history} text="Twon/city cases" />
      <div className="country-header d-flex py-4">
        <div className="country-img w-50">
          <img
            className="w-100 h-100"
            src={imgs[match.params.continent]}
            alt="continent-img"
          />
        </div>
        <div className="country-title w-50 d-flex flex-column pl-3 justify-content-end align-items-end px-4 py-2 ">
          <h2>{match.params.country}</h2>
          <p>
            {cases.All.confirmed}
            cases
          </p>
        </div>
      </div>
      <div className="country-cities">
        <h3 className="p-2 text-small">CITY/TOWN BREACKDOWN</h3>
        <ul className="countryList">
          {cases.twons.map((acase) => (
            <li
              key={acase.name}
              className="acountry d-flex  align-items-center  justify-content-between"
            >
              <h2>{acase.name}</h2>
              <div className="cont-text d-flex p-2 text-small align-items-center country-name">
                <p>
                  {acase.confirmed}
                  cases
                </p>
                <button type="button" className="p-2 text-small">
                  <BiRightArrowCircle />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="tost">
        {cases.twons.length === 0
          ? `No Cities's 
          Information About this country...`
          : null}
      </p>
    </section>
  );
};

Country.propTypes = {
  cases: propTypes.shape({
    All: propTypes.shape({
      confirmed: propTypes.string,
    }),
    twons: propTypes.arrayOf(propTypes.shape({})).isRequired,
  }).isRequired,
  history: propTypes.arrayOf(propTypes.shape({})).isRequired,
  match: propTypes.shape({
    params: propTypes.shape({
      country: propTypes.string,
      continent: propTypes.string,
    }),
  }).isRequired,
};
export default Country;
