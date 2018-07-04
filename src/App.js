import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Grid from './Component/Body/Grid';
import { hot } from 'react-hot-loader';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import BodyAnnonce from './Component/Annonce/BodyAnnonce';
import Profil from './Component/Profil/Profil';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Header/>        

        <Route exact path="/" component={Grid}/>
        <Route path="/bodyAnnonce" component={BodyAnnonce}/>
        <Route path="/profil" component={Profil}/>

        </div>  
      </Router>      
      </div>
    );
  }
}

export default hot(module)(App);
