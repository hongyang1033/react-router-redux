import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className="header">
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <Link className="nav-item nav-link" to="/">Home</Link>
      <Link className="nav-item nav-link" to="/search">Search</Link>
    </nav>
  </div>
);

export default Header;
