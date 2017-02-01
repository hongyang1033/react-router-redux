import React, { Component } from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div classNameName="header">
    <nav className="navbar navbar-light bg-faded">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
