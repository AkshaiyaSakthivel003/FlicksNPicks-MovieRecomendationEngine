import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import axios from 'axios';
import validator from 'validator';

const AdminLogin = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const navigate = useNavigate();

  const handleNext = () => {
   ;
  };

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
  
            if (userRole === 'ADMIN') {
              const token = response.data.token;
              localStorage.setItem('token', token);
              navigate('/admindashboard');
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
  

  return (
    <div className="admin-login-container">
     {/* <video autoPlay loop muted className="background-video">
      <source src="bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> */}
    <div>
          {loginError && <p className="error">{loginError}</p>}
          <form onSubmit={(e)=> e.preventDefault() } className="admin-login-form">

          <h1>ADMIN LOGIN</h1>
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
          </form>
        </div>
    </div>
  );
};

export default AdminLogin;
