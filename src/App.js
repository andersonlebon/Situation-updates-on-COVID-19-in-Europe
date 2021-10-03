import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FilterByCOn from './components/filters/byContinent';
import Continent from './components/continent';
import './sass/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Country from './components/country';
import Header from './components/header';

function App() {
  const { casesReducer } = useSelector((state) => state);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/ss" exact component={FilterByCOn} /> 
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
