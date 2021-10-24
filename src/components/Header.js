import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo">
      <h1>KitchenVille</h1>
    </div>

    <div className="nav">
      <NavLink to="/" className="nav-links" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" className="nav-links" activeClassName="is-active">Create Recipie</NavLink>
    </div>

    <div className="dropdown">
      <NavLink to="/help" className="nav-links" activeClassName="is-active">Help</NavLink>
    </div>
  </header>
);

export default Header;
