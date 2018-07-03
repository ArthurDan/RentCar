import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Grid from './Component/Body/Grid';
import { hot } from 'react-hot-loader';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Grid/>
        
      </div>
    );
  }
}

export default hot(module)(App);
