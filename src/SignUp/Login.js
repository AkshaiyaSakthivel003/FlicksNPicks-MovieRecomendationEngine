import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { findUser } from './data'; 
import { addUser } from './data'; 
import { useDispatch } from 'react-redux';
import { setMovie } from '../actions/movieActions';
import { useNavigate } from 'react-router-dom';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import './Login.css';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import validator from 'validator';

const Login = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [role] = useState('');
  
  const movie = username; 
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleValidation = async (e) => {
    e.preventDefault();
  
    try {
      if (password.length === 0 || username.length === 0) {
        alert('Fill All The Required Data');
      } else if (!username || !validator.isEmail(username)) {
        alert('Enter Valid Email');
      } else if (!password) {
        alert('Enter Valid Password');
      } else {
        axios.post("http://localhost:8080/api/auth/login", {
          email: username,
          password: password,
          role: role  
        })
          .then((response) => {
            console.log(response.data);
  
            const userRole = response.data.role;
            localStorage.setItem('role', userRole);
  
            if (userRole === 'ADMIN' || userRole === 'CUSTOMER') {
              const token = response.data.token;
              localStorage.setItem('token', token);
              navigate('/explore');
            } else {
              alert('You do not have the required role to access this page.');
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const handleAdminClick = () => {
    navigate('/adminlogin');
  };  

  return (
    <div className="login-container">
    <video autoPlay loop muted className="background-video">
      <source src="bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div>
        <div>
          {loginError && <p className="error">{loginError}</p>}
          <form onSubmit={(e)=> e.preventDefault() } className="login-form">

          <h1>LOGIN</h1>
          <input
            type="text"
            placeholder="Email ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleValidation}>LOGIN</button>
          <div>{handleValidation}</div> 
          <div className='link1'>New User? 
          <Link className="link2" to="/register"> Register Now</Link>
          </div>
          </form>
        </div>
        <div className='adminhome'>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="medium" aria-label="add" className='adh-button'>
      <AdminPanelSettingsRoundedIcon onClick={handleAdminClick}/>
      </Fab>
      </Box>
      </div>
    </div>
    </div>
  );
};

export default Login;

  