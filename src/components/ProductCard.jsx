// src/components/ProductCard.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductCard.css';

function ProductCard({ id, name, price, image }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = { id, name, price, image };
    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price}</p>
        <button onClick={handleAddToCart} className="add-to-cart-btn">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductCard;
