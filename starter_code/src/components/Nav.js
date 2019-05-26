import React from 'react';
import './Nav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Nav = () => {

  return (
            <div className="navbar">
              <Link to="/">Home</Link>
              <Link to="/Dashboard/CountryDetail">Dashboard</Link>
            </div>
  );
}

export default Nav;

