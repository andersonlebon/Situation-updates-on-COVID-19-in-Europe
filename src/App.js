import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FilterByCOn from './components/filters/byContinent';
import Continent from './components/continent';
import './sass/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Country from './components/country';

function App() {
  const { casesReducer } = useSelector((state) => state);

  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact component={FilterByCOn} />
          <Route
            path="/continent/:continent"
            render={({ match, history }) => (
              <Continent
                history={history}
                match={match}
                cases={casesReducer.cases}
              />
            )}
          />
          <Route
            path="/:continent/:country"
            render={({ match, history }) => (
              <Country
                history={history}
                match={match}
                cases={casesReducer.currentCountry}
              />
            )}
          />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
