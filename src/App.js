import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FilterByCOn from './components/filters/byContinent';
import './sass/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './components/home';
import { getAllData, getAllDataSuccess } from './store/casesSlice/case';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
