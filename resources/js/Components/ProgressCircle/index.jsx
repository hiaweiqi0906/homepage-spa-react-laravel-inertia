import React from 'react';
import './index.css';

const ProgessCircle = ({ percentage }) => {
  return (
    <div className="circle-container">
      <div className="circle">
        <div
          className="circle-progress"
          style={{
            background: `conic-gradient(#4A53E4 ${percentage * 3.6}deg, #E0E0E0 0deg)`,
          }}
        />
        <div className="circle-content">
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgessCircle;