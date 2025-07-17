import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css'; 
import vid1 from './vid1.mp4';

const Explore = () => {
  const [isActive, setIsActive] = useState(false);
  const nav = useNavigate();
  const handleExploreClick = () => {
    nav('/dashboard');
  };

  return (
    <div className="showcase-wrapper">
      <div className={`showcase ${isActive ? 'active' : ''}`}>
        <header>
          <h2 className="logo">Flicks&Picks</h2>
        </header>
        
        <video src={vid1} muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
          <h2>Film Finds for You</h2>

          <p>
            Lights are dimmed, popcorn's ready! Let's find the perfect film for your mood today.
          </p>
          <a href="#" onClick={handleExploreClick}>Explore</a>
        </div>
        <ul className="social">
          <li>
            <a href="#">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Explore;
