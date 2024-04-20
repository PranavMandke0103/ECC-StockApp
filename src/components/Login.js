// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  let navigate = useNavigate();
  const [userId, setUserId] = useState(''); // Add state to hold the User ID

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/dashboard', { state: { userId } }); // Pass the User ID to the Dashboard page
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
            type="text" 
            placeholder="User ID" 
            required 
            value={userId}
            onChange={(e) => setUserId(e.target.value)} // Update the User ID state when the input changes
          />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="login-btn">LOGIN</button>
          <button type="button" className="signup-btn">Sign up now</button>
        </form>
      </div>
    </div>
  );
}

export default Login;