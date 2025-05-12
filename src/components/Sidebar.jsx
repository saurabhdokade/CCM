import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation(); // helps set active class

  return (
    <div className="sidebar">
      <div className="logo">Logo here</div>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">📊 Dashboard</Link>
        </li>
        <li className={location.pathname === '/order' ? 'active' : ''}>
          <Link to="/order">📋 Order</Link>
        </li>
        <li className={location.pathname === '/product' ? 'active' : ''}>
          <Link to="/product">🛍️ Product</Link>
        </li>
        <li className={location.pathname === '/review' ? 'active' : ''}>
          <Link to="/review">💬 Review</Link>
        </li>
        <li className={location.pathname === '/settings' ? 'active' : ''}>
          <Link to="/settings">⚙️ Settings</Link>
        </li>
      </ul>
      <div className="logout">
        <Link to="/logout">🔓 Logout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
