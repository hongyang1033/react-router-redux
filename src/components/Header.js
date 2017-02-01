import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className="header">
    <div className="container">
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <Link className="nav-item nav-link" to="/">Home</Link>
        <Link className="nav-item nav-link" to="/search">Search</Link>
      </nav>
    </div>
  </div>
);

export default Header;
