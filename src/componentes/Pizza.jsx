import React from 'react';

const Pizza = ({ name, price, ingredients, img }) => {
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
        </div>
      </div>
    </div>
  );
};

export default Pizza;
