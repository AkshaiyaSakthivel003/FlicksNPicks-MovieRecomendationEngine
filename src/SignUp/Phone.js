// LoginWithPhone.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const LoginWithPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');
  const nav = useNavigate();

  const handleGenerateOTP = () => {
    // Generate a 6-digit OTP (for simplicity, in a real app, use a proper OTP generation mechanism)
    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOTP(otp.toString());
    alert('Generated OTP: ' + otp);
  };

  const handleVerifyOTP = () => {
    // Verify the entered OTP with the generated OTP
    if (otp === generatedOTP) {
      alert('OTP Verified. Redirecting to dashboard...');
      nav('/dashboard'); // Redirect to the dashboard on successful OTP verification
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div>
        <form className="login-form">
          <h1>LOGIN WITH PHONE</h1>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleGenerateOTP}>Generate OTP</button>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default LoginWithPhone;
