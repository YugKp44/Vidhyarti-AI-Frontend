import React, { useState } from "react";
import './signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faApple,faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for toggling confirm password visibility

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleContinue = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Email entered:", email);
    console.log("Password entered:", password);
    // Add any redirection or further logic here
  };

  return (
    <div className="signup-container">
      <video autoPlay muted loop className="background-video">
        <source src={`${process.env.PUBLIC_URL}/videoplayback.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       <div className="left-image-container">
         <img src={`${process.env.PUBLIC_URL}/vidhya.png`} alt="Description" className="side-image1" />
       </div>
      <div className="form-wrapper1">
        <h2>Sign Up</h2>
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={handleEmailChange} 
          className="input-field"
        />
        <div className="password-wrapper">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            value={password} 
            onChange={handlePasswordChange} 
            className="input-field"
          />
          <span className="password-icon" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
        <div className="password-wrapper">
          <input 
            type={showConfirmPassword ? "text" : "password"} 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={handleConfirmPasswordChange} 
            className="input-field"
          />
          <span className="password-icon" onClick={toggleConfirmPasswordVisibility}>
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
          </span>
        </div>
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
    </div>
  );
};

export default Signup;
