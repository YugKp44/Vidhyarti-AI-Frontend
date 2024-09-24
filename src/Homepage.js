import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HomePage.css';
import { faMessage, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Add faArrowRight here
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

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <video autoPlay muted loop className="background-video">
        <source src={`${process.env.PUBLIC_URL}/videoplayback.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <aside className="sidebar">
        <h2 className="logo">विद्याrthi AI</h2>
        <ul className="menu">
          <li>
            <FontAwesomeIcon icon={faTachometerAlt} className="icon" /> Dashboard
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} className="icon" /> Conversation
          </li>
          <li>
            <FontAwesomeIcon icon={faIdBadge} className="icon" /> College Compare
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} className="icon" /> Academic Scholarship
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> College Compass
          </li>
          <li>
            <FontAwesomeIcon icon={faVideo} className="icon" /> Campus Tour
          </li>
          <li className="set">
            <FontAwesomeIcon icon={faCog} className="icon" /> Settings
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="signup-icon" onClick={handleSignupClick}>
          <FontAwesomeIcon icon={faUser} className="user-icon" />
        </div>

        <h1>Welcome to विद्याrthi AI</h1>
        <p className="description">
          Discover powerful AI tools and features tailored to enhance your experience. Get started by exploring the options below.
        </p>

        <section className="conversation-section">
          <h3 onClick={handleClick} style={{ cursor: "pointer", padding: "20px", backgroundColor: "#eae7e4" }}>
            <FontAwesomeIcon icon={faMessage} style={{ color: "#333" }} /> Start Your First Conversation with विद्याrthi AI
            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px", color: "#333" }} /> {/* Add the arrow here */}
          </h3>
        </section>

        <section className="latest-updates">
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
        </section>
      </main>
    </div>
  );
};

export default HomePage;
