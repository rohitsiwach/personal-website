import React from 'react';
import './MenuHint.css';

function MenuHint({ showMenuHint, handleMenuHintClick }) {
  if (!showMenuHint) return null;

  return (
    <div className="menu-hint" onClick={handleMenuHintClick}>
      <span>☰</span>
      <span>Explore Menu</span>
    </div>
  );
}

export default MenuHint; 