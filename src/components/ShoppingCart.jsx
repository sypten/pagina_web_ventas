// src/components/ShoppingCart.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './ShoppingCart.css';

function ShoppingCart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  // Calculamos el total sumando precio * cantidad.
  const totalPrice = cartItems.reduce((sum, item) => {
    // Extraemos el valor numérico del precio (asumiendo que viene como "$2.50")
    const priceNumber = parseFloat(item.price.replace("$", ""));
    return sum + priceNumber * item.quantity;
  }, 0).toFixed(2);

  return (
    <>
      <div className="shopping-cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        Carrito ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
      </div>
      {isOpen && (
        <div className="shopping-cart">
          <h2>Carrito de Compras</h2>
          {cartItems.length > 0 ? (
            <>
              <ul>
                {cartItems.map(item => (
                  <li key={item.id}>
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.name}</p>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Precio: {item.price}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">X</button>
                  </li>
                ))}
              </ul>
              <div className="cart-total">Total: ${totalPrice}</div>
              <button onClick={clearCart} className="clear-cart-btn">Vaciar Carrito</button>
            </>
          ) : (
            <p>El carrito está vacío.</p>
          )}
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
