import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="logo-button">Dashboard</button>
      <div className="nav-links">
        <div className="nav-col">Favourite</div>
        <div className="nav-col">About</div>
        <div className="nav-col">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;


