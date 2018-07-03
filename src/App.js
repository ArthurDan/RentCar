import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Grid from './Component/Body/Grid';
import { hot } from 'react-hot-loader';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Header/>
        <Grid/>
        <Route exact path="/" component={App} />
      </Router>  
      </div>
    );
  }
}

export default hot(module)(App);
