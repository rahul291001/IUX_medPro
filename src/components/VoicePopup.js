// VoicePopup.jsx

import React, { useEffect } from "react";
import imgv from "../image/record.png";
import "../styles/voice.css";

const VoicePopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Close after 3 seconds (adjust as needed)

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, [onClose]);

  return (
    <div className="voice-popup">
      <img src={imgv} alt="Voice Popup" />
    </div>
  );
};

export default VoicePopup;
