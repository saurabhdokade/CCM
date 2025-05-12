import React from 'react';
import './App.css';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import OrderList from './components/OrderList';
import Review from './components/review'; // <- make sure this path matches where you saved it

function App() {
  return (
    <Router>
      <div className="app flex">
        <Sidebar />
        <div className="main-content flex-1">
          <Topbar />
          <Routes>
            <Route path="/" element={<OrderList />} />
            <Route path="/review" element={<Review />} />
            {/* Add more routes if needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
