// LeaveContainer.js
import React from "react";

const LeaveContainer = ({ show }) => {
  return (
    <div
      className={`Leave-container ${show ? 'block' : 'hidden'}`}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '200px',
        width: '350px',
        backgroundColor: '#FF0000', // Red color
      }}
    ></div>
  );
};

export default LeaveContainer;
