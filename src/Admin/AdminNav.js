import { useNavigate } from 'react-router-dom';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import './AdminNavbar.css';

const AdminNavbar = () => {
  const nav = useNavigate();

  const handleFavClick = () => {
    nav('/fav');
  };

  const handleAdminDashClick = () => {
    nav('/admindashboard');
  };
  const handleSearchClick = () => {
    nav('/search');
  };

  const handleGenreClick = () => {
    nav('/genre');
  };

  const handleTrendClick = () => {
    nav('/trending');
  };

  return (
    <nav className="admin-navbar">
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab size="medium" aria-label="add" className='add-button'>
        <AddIcon onClick={handleAdminDashClick}/>
        </Fab></Box>
      <div className="nav-links">
        <div className="nav-col" onClick={handleTrendClick}>New&Popular</div>
        <div className="nav-col" onClick={handleSearchClick}>Search</div>
        <div className="nav-col" onClick={handleFavClick}>Favourite</div>
        <div className="nav-col" onClick={handleGenreClick}>Genre</div>
      </div>
    </nav>
  );
};

export default AdminNavbar;

