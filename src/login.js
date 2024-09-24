import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import './login.css';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
   <div className="login-container">
  {/* Background Video */}
  <video autoPlay muted loop className="background-video">
    <source src={`${process.env.PUBLIC_URL}/videoplayback.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Left Image Container */}
  <div className="left-image-container">
    <img src={`${process.env.PUBLIC_URL}/vidhya.png`} alt="Description" className="side-image" />
  </div>

  {/* Right Side Form */}
  <div className="right-form-container">
    <div className="form-wrapper">
      <h2>Login</h2>
      <form>
        <div className="input-group">
          <input type="email" placeholder="Email" className="input-field" />
        </div>
        <div className="input-group password-input-group">
          <input type={showPassword ? "text" : "password"} placeholder="Password" className="input-field" />
          <span className="eye-icon" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
        <button className="submit-btn">Login</button>
        <div className="alternative-login">
          <button className="social-btn google-btn">
            <FontAwesomeIcon icon={faGoogle} /> Continue with Gmail
          </button>
          <button className="social-btn apple-btn">
            <FontAwesomeIcon icon={faApple} /> Continue with Apple
          </button>
        </div>
        <div className="form-links">
          <a href="/signup">Create an account</a>
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default LoginPage;
