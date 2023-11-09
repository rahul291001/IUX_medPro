import React from 'react';

const Notification = ({ message, color, onClose }) => {
  return (
    <div
      style={{
        backgroundColor: color || 'green',
        color: 'white',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        textAlign: 'right',
      }}
    >
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Notification;
