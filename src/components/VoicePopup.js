import React, { useEffect } from "react";
import imgv from "../image/record.png";
import "../styles/voice.css";

const VoicePopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div>
      <div className="backdrop"></div>
      <div className="voice-popup">
        <img src={imgv} alt="Voice Popup" />
      </div>
    </div>
  );
};

export default VoicePopup;
