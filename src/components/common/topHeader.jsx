// import propTypes from 'prop-types';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { MdKeyboardVoice, MdSettings } from 'react-icons/md';
// import { Link } from 'react-router-dom';

const TopHeader = ({ text, history }) => {
  const handleGoBack = () => {
    history.push('/');
  };
  return (
    <>
      <nav className="d-flex justify-content-between align-items-center top-bar">
        <button
          classe="d-flex justify-content-center align-items-center "
          onClick={handleGoBack}
          type="button"
        >
          <IoIosArrowBack />
        </button>
        <h2 className="ml-5">{text}</h2>
        <div className="d-flex">
          <MdKeyboardVoice />
          <MdSettings />
        </div>
      </nav>
      {/* <div className="nasa-manu">
        <ul>
          <li>
            <Link to="/deathineurop">Seel all deaths</Link>
          </li>
        </ul>
      </div> */}
    </>
  );
};

// TopHeader.propTypes = {
//   text: propTypes.string.isRequired,
//   history: propTypes.arrayOf(propTypes.shape({})).isRequired,
// };

export default TopHeader;
