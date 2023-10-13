// Drawer.tsx

import './Drawer.styles.css';

import React, { useState } from 'react';

interface DrawerProps {
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`drawer-container ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleDrawer}>
        Toggle Drawer
      </button>
      <div className="drawer">
        <h2>Drawer Content</h2>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Drawer;
