import React from 'react';
import Sidebar from '../components/Sidebar';

const ContentLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default ContentLayout;
