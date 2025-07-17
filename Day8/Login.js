import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { findUser } from './data'; 
import { addUser } from './data'; 
import { useDispatch } from 'react-redux';
import { setMovie } from './actions/movieActions';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const movie = username; 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setLoginError('Enter Valid Username or Password');
      return;
    }
    const user = findUser(username, password);
    if (user) {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
    dispatch(setMovie(movie));
  };

  const handleNext = () => {
    navigate('/dashboard');
  };

  const handleValidation = () => {
    try {
      addUser(username, password);
      setIsLoggedIn(true);
      setLoginError('');
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <div className="login-container">
    <div>
      {isLoggedIn ? (
        <div className='wel'>
          <h1>Welcome Back {username},</h1>
          <h1>"Lights are dimmed, popcorn's ready! Let's find the perfect film for your mood today.</h1>
          <button onClick={handleNext}>Explore</button>
        </div>
      ) : (
        <div>
          {loginError && <p className="error">{loginError}</p>}
          <form onSubmit={(e)=> e.preventDefault() } className="login-form">

          <h1>LOGIN</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>LOGIN</button>
          <div>{handleValidation}</div> 
          <p>New User? 
          <Link className="link1" to="/reg"> Register Now</Link>
          </p>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default Login;

  
  // <h1>Welcome</h1>
  // <h4>Username: {username}</h4>
  // <Link className="link1" to="/movies"> 
  // <button onClick={handleLogout}>Explore</button>
  // </Link>