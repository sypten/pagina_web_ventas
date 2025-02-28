// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app">
      <Header setSearchQuery={setSearchQuery} />
      <ShoppingCart />
      <Slider />
      <div className="content">
        <Sidebar />
        <ProductList searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default App;
