import React from 'react';

import './index.css';

const Header = ({ nick }) => {
  return (
    <div className="Header__container">
      <span>Conversation with {nick}</span>
    </div>
  );
};

export default Header;
