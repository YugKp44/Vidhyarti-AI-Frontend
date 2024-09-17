import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HomePage.css';
import { faMessage, faUser } from "@fortawesome/free-solid-svg-icons"; // Import user icon
import { useNavigate } from "react-router-dom";

import {
  faTachometerAlt,
  faComments,
  faIdBadge,
  faGraduationCap,
  faMapMarkerAlt,
  faVideo,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatbot");
  };

  // Function to navigate to the signup page
  const handleSignupClick = () => {
    navigate("/signup"); // Assuming the signup route is /signup
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2 className="logo">विद्याrthi AI</h2>
        <ul className="menu">
          <li>
            <FontAwesomeIcon icon={faTachometerAlt} className="icon" /> Dashboard
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} className="icon" /> Conversation
          </li>
          <li>
            <FontAwesomeIcon icon={faIdBadge} className="icon" /> College compare
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} className="icon" /> Academic scholarship
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> College compass
          </li>
          <li>
            <FontAwesomeIcon icon={faVideo} className="icon" /> Campus tour
          </li>
          <li className="set">
            <FontAwesomeIcon icon={faCog} className="icon" /> Settings
          </li>
        </ul>
      </div>

      <div className="main-content">
        {/* User signup icon in the top right corner */}
        <div className="signup-icon" onClick={handleSignupClick}>
          <FontAwesomeIcon icon={faUser} className="user-icon" />
        </div>

        <h1>Welcome to विद्याrthi AI</h1>
        <p className="description">
          Discover powerful AI tools and features tailored to enhance your experience. Get started by exploring the options below.
        </p>

        <div className="conversation-section">
          <h3 onClick={handleClick} style={{ cursor: "pointer", padding: "20px", backgroundColor: "#eae7e4" }}>
            <FontAwesomeIcon icon={faMessage} style={{ color: "#333" }} /> Conversation
          </h3>
          <p>
            "Experience Conversation on a whole new level. Delve into its advanced features and unlock a world of possibilities."
          </p>
        </div>

        <div className="latest-updates">
          <h2>Latest Updates</h2>
          <div className="updates">
            <div className="update-card">
              <h3>AI Insights: New Feature</h3>
              <p>AI Insights: Gain valuable insights into the impact of your conversations.</p>
            </div>
            <div className="update-card">
              <h3>Improved Efficiency</h3>
              <p>We've optimized our servers to provide a faster and more reliable experience.</p>
            </div>
            <div className="update-card">
              <h3>Enhanced User Experience</h3>
              <p>Based on your valuable feedback, we've made significant improvements to the user interface.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
