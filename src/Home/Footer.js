import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Footer.css';


const Footer = () => {
  const nav = useNavigate();

  const handlePrivacyClick = () => {
    nav('/privacy-policy');
  };
  
  const handleTermsClick = () => {
    nav('/terms');
  };
  const handleAboutUsClick = () => {
    nav('/aboutus');
  };
  const handleFaqClick = () => {
    nav('/faq');
  };

  const handleFeedClick = () => {
    nav('/feedback');
  };

  return (
<div className='wrapper'>

    <foot className="footer">
      
      <div className="foot-links">
        <div className="foot-col" onClick={handlePrivacyClick}>Privacy Policy</div>
        <div className="foot-col" onClick={handleTermsClick}>Terms & Conditions</div>
        <div className="foot-col" onClick={handleAboutUsClick}>About Us</div>
        <div className="foot-col" onClick={handleFaqClick}>FAQ</div>
        <div className="foot-col" onClick={handleFeedClick}>Feedback</div>
      </div>
    </foot>
</div>

  );
};

export default Footer;