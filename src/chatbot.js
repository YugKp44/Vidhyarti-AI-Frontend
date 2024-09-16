import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Chatbot.css";
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  return (
    <div style={{ padding: '0px', textAlign: 'center' }}>
           <div className='chatbot-body'>
           <div className="chat-sidebar">
        <h2 className='vidyaAI'>विद्यार्थी AI</h2>
        <ul className='chat-dash'>
        <li className='dash-text'>
       <FontAwesomeIcon icon={faBars} style={{ color: "#050505" }} /> Dashboard
    </li>
          <li className='convo-li'><FontAwesomeIcon icon={faMessage} style={{ color: "#333" , fontSize: "18px", zIndex:"2" }} /> 
          <h4 className='convo_ttext'>Conversation</h4>
          </li>
        </ul>
        <div className="settings-chat">⚙ Settings</div>
      </div>

      {/* Main Content */}
      <div className="main-chat">
        <div className="conversation-header">
          <h3 className='Mainconvo'><FontAwesomeIcon icon="fa-regular fa-message" style={{color: "#351313",}} />Conversation</h3>
          <p>No conversation started.</p>
        </div>
        <div className='centre-image'>
     
        </div>

        {/* Input section */}
        <div className="input-section">
          <input type="text" placeholder="Ask anything you want ........" />
          <button className='generate'>Generate</button>
        </div>
      </div>
           </div>

    </div>
  );
};

export default Chatbot;