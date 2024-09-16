// Login.js
import React, { useState } from "react";
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

const Login = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinue = () => {
    console.log("Email entered:", email);
    // You can add redirection or other logic here if needed
  };

  return (
    <div className="login-container">
      <h2>Welcome</h2>
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
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> {/* Ensure Link is imported */}
      </div>
      <div className="or-divider">OR</div>
      <div className="social-login">
        <button className="social-button google-button">
          <FontAwesomeIcon icon={faGoogle} className="social-icon" />
          Login with Google
        </button>
        <button className="social-button microsoft-button">
          <FontAwesomeIcon icon={faMicrosoft} className="social-icon" />
          Login with Microsoft
        </button>
        <button className="social-button apple-button">
          <FontAwesomeIcon icon={faApple} className="social-icon" />
          Login with Apple
        </button>
      </div>
    </div>
  );
};

export default Login;
