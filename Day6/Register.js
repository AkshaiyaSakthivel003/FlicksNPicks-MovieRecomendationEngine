import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import { addUser } from './data'; 
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const nav = useNavigate();

  const handleRegister = () => {
    if (email.length === 0 || password.length === 0 || username.length === 0) {
      alert('Fill All The Required Data');
    } else if (!validator.isEmail(email)) {
      alert('Invalid Email ID');
    } else if (password.length < 6 || confirmPassword.length < 6) {
      alert('Fill The Data Within 6 Character Value');
    } else if (password !== confirmPassword) {
      alert('Passwords Do Not Match');
    } else {
      const registrationSuccess = addUser(username, password);
      if (registrationSuccess) {
        alert('Registration Successful');
        nav('/');
      } else {
        alert('Username already exists. Please choose a different username.');
      }
    }
  };

  return (
    <div className="reg-container">
      <div>
      <form className="reg-form">
      
        <h1>REGISTER</h1>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleRegister}>SIGN UP</button>
          <p>Already A User ? 
          <Link className="link1" to="/"> Login</Link>
          </p>
      </form>
      </div>
    </div>
  );
};

export default Register;
