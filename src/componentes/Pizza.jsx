import React, { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data));
  }, []);

  if (!pizza) return <div>Cargando...</div>;

  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>Price: ${pizza.price}</p>
      <p>Ingredients: {pizza.ingredients.join(", ")}</p>
      <img src={pizza.image} alt={pizza.name} />
      <p>{pizza.description}</p>
    </div>
  );
};

export default Pizza;
