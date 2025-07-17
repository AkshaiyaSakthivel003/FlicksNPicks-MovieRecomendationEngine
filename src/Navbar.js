import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="logo-button">Dashboard</button>
      <div className="nav-links">
      <Link to="/fav" className="nav-col">Favourite</Link>
        <div className="nav-col">About</div>
        <div className="nav-col">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from 'react';
// import Favorites from './Favorites';
// import './Navbar.css';

// const Navbar = () => {
//   const [activeComponent, setActiveComponent] = useState('Favourite');

//   const handleComponentChange = (componentName) => {
//     setActiveComponent(componentName);
//   };

//   let componentToDisplay;
//   if (activeComponent === 'Favourites') {
//     componentToDisplay = <Favorites />;
//   } 

//   return (
//     <div>
//       <nav className="navbar">
//         <button className="nav-col" onClick={() => handleComponentChange('Favourite')}>Favourite</button>
//         <button className="nav-col" >About</button>
//         <button className="nav-col" >Contact</button>
//       </nav>
//       <div className="component-container">
//         {componentToDisplay}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


