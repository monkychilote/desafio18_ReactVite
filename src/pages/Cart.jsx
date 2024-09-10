import React from 'react';
import { useCart } from '../context/CartContext';  // Asegúrate de que la ruta sea correcta

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, totalAmount } = useCart();  // Accedemos al total del carrito desde el contexto

  return (
    <div className="container">
      <h1>Tu Carrito</h1>
      {cartItems.length === 0 ? (
        <p>No tienes productos en tu carrito.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.name}</h5>
                  <p>Precio: ${item.price.toLocaleString()}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
                <div>
                  <button 
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => addToCart(item)}
                  >
                    + Añadir
                  </button>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    - Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total a pagar: ${totalAmount.toLocaleString()}</h4>  {/* Mostramos el total del carrito */}
        </div>
      )}
    </div>
  );
};

export default Cart;
