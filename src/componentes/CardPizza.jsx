import React from 'react';
import { useCart } from '../context/CartContext';  // Asegúrate de que la ruta sea correcta

const CardPizza = ({ name, price, ingredients, img, pizza }) => {
  const { addToCart } = useCart();  // Asegúrate de que `useCart` esté correctamente implementado

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <ul className="list-unstyled">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-capitalize">{ingredient}</li>
            ))}
          </ul>
          <p className="card-text">Precio: ${price.toLocaleString()}</p>
          <div className="mt-auto d-flex justify-content-between">
            <button className="btn btn-primary">Ver Más</button>
            <button 
              className="btn btn-success"
              onClick={() => addToCart(pizza)}  // Llama a `addToCart` correctamente
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
