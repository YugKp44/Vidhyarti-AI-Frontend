// Signup.js
import React, { useState } from "react";
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // New state for password
  const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleContinue = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Email entered:", email);
    console.log("Password entered:", password);
    // You can add redirection or other logic here if needed
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input 
        type="email" 
        placeholder="Email Address" 
        value={email} 
        onChange={handleEmailChange} 
        className="input-field"
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={handlePasswordChange} 
        className="input-field"
      />
      <input 
        type="password" 
        placeholder="Confirm Password" 
        value={confirmPassword} 
        onChange={handleConfirmPasswordChange} 
        className="input-field"
      />
      <button className="continue-button" onClick={handleContinue}>
        Sign Up
      </button>
      <div className="login-link">
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
      <div className="or-divider">OR</div>
      <div className="social-login">
        <button className="social-button google-button">
          <FontAwesomeIcon icon={faGoogle} className="social-icon" />
          Sign up with Google
        </button>
        <button className="social-button microsoft-button">
          <FontAwesomeIcon icon={faMicrosoft} className="social-icon" />
          Sign up with Microsoft
        </button>
        <button className="social-button apple-button">
          <FontAwesomeIcon icon={faApple} className="social-icon" />
          Sign up with Apple
        </button>
      </div>
    </div>
  );
};

export default Signup;
