import React, { useState } from "react";
import { pizzas } from "../pizzas"; // Asegúrate de que pizzas.js exporta pizzas
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";

// Asegúrate de que cada pizza tenga una propiedad `quantity`
const initialCart = pizzas.map((pizza) => ({
  ...pizza,
  quantity: 0, // Inicializa la cantidad en 0
}));

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id && pizza.quantity > 0
          ? { ...pizza, quantity: pizza.quantity - 1 }
          : pizza
      )
    );
  };

  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.quantity,
    0
  );

  return (
    <div className="container-fluid">
      <h2>Carrito de Compras</h2>
      <ul className="list-group">
        {cart.map((pizza) => (
          <li
            key={pizza.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <img
                src={pizza.img}
                alt={pizza.name}
                style={{ width: "50px", marginRight: "20px" }}
              />
              <div>
                <h5>{pizza.name}</h5>
                <p>Precio: ${pizza.price.toLocaleString()}</p>
                <p>Cantidad: {pizza.quantity}</p>
              </div>
            </div>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => decreaseQuantity(pizza.id)}
                disabled={pizza.quantity === 0} // Deshabilita el botón si la cantidad es 0
              >
                -
              </button>
              <button
                className="btn btn-primary"
                onClick={() => increaseQuantity(pizza.id)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toLocaleString()}</h3>
      <button className="btn btn-success mt-3">Pagar</button>
    </div>
  );
};

export default Cart;
