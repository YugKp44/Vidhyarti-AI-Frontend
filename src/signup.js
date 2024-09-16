// Signup.js
import React, { useState } from "react";
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

const Signup = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    console.log("Email entered:", email);
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
        className="email-input"
      />
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
      <div className="login-link">
        <p>Already have an account? <Link to="/login">Login</Link></p> {/* Ensure Link is imported */}
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
