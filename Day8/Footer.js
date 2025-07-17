import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Footer.css';

const Footer = () => {
  const nav = useNavigate();

  const handlePrivacyClick = () => {
    nav('/privacy');
  };
  
  const handleFootClick = () => {
    nav('/footer');
  };

  return (
    <nav className="footer">
      <button className="logo-button" onClick={handleFootClick}>Footer</button>
      <div className="foot-links">
        <div className="foot-col" onClick={handlePrivacyClick}>Privacy Policy</div>
        <div className="foot-col">Terms & Conditions</div>
        <div className="foot-col">Contact Us</div>
        <div className="foot-col">FAQ</div>
      </div>
    </nav>
  );
};

export default Footer;


