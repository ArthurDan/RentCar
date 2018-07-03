import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Grid from './Component/Body/Grid';
import { hot } from 'react-hot-loader';

import {
  BrowserRouter as Router,
  Route,
 
} from 'react-router-dom';



class App extends Component {




  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Header/>
        <Grid/>
<<<<<<< HEAD
        
        
        </div>
      </Router>  
=======
        </div>  
      </Router>      
>>>>>>> f9e1d51631b11bdc41d6caa4866aadbb417b2ce0
      </div>
    );
  }
}

export default hot(module)(App);
