import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
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

export default Home;
