import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Grid from './Component/Body/Grid';
import { hot } from 'react-hot-loader';

import {
  BrowserRouter as Router,
  Route,
 
} from 'react-router-dom';
import BodyAnnonce from './Component/Annonce/BodyAnnonce';



class App extends Component {




  render() {
    return (
      <div className="App">
      <Router>
        <div>
<<<<<<< HEAD
        <Header/>
        <Grid/>


        </div>
      </Router>  
=======
        <Header/>        

        <Route exact path="/" component={Grid}/>
        <Route path="/bodyAnnonce" component={BodyAnnonce}/>

        </div>  
      </Router>      
>>>>>>> 582414871bbc1b4617caec3f2c27120d9723d9e2
      </div>
    );
  }
}

export default hot(module)(App);
