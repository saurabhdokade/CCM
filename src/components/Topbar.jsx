import React from 'react';
import './Topbar.css';
import avatar from '../assets/Avtar_image.jpg';

const Topbar = () => {
  return (
    <div className="topbar">
      <h2>Orders</h2>
      <div className="topbar-icons">
        <span>🔍</span>
        <span>🔔</span>
        <img src={avatar} alt="User Avatar" />
      </div>
    </div>
  );
};

export default Topbar;
