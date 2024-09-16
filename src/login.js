import React, { useState } from "react";
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Ensure correct import here

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // New state for password

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update password state
  };

  const handleContinue = () => {
    console.log("Email entered:", email);
    console.log("Password entered:", password);
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <input 
        type="email" 
        placeholder="Email Address" 
        value={email} 
        onChange={handleEmailChange} 
        className="email-input"
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={handlePasswordChange} 
        className="password-input" // New class for password input
      />
      <button className="continue-button" onClick={handleContinue}>
        Log In
      </button>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
      <div className="or-divider">OR</div>
      <div className="social-login">
        <button className="social-button google-button">
          <FontAwesomeIcon icon={faGoogle} className="social-icon" />
          Log in with Google
        </button>
        <button className="social-button microsoft-button">
          <FontAwesomeIcon icon={faMicrosoft} className="social-icon" />
          Log in with Microsoft
        </button>
        <button className="social-button apple-button">
          <FontAwesomeIcon icon={faApple} className="social-icon" />
          Log in with Apple
        </button>
      </div>
    </div>
  );
};

export default Login;
