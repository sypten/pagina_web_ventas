// src/components/Header.jsx
import React from 'react';
import './Header.css';

function Header({ setSearchQuery }) {
  return (
    <header className="header">
      <div className="logo">Papelería Online</div>
      <input 
        type="text" 
        className="search-input" 
        placeholder="Buscar productos..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </header>
  );
}

export default Header;
