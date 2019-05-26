import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import Dashboard from './pages/Dashboard.js';
import CountryDetail from './components/CountryDetail'


function App() {
    return(
      <Router>
        <Nav/>
          <div className="main-div">
            <Route exact path="/" component={Home} />
            <Route path="/Dashboard" component={Dashboard}/>
            <Route exact path='/Dashboard/CountryDetail/:cca3' component={CountryDetail} />
          </div>
      </Router>
    )
}

export default App;


