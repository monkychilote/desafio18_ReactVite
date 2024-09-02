import React, { useEffect, useState } from "react";
import "./Pizza.css"; // Archivo CSS personalizado para pizza

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reemplazar 'p001' con el ID fijo de la pizza que deseas obtener
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => {
        setPizza(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching pizza:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!pizza) {
    return <p>Pizza not found</p>;
  }

  return (
    <div className="pizza-detail">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>Price: ${pizza.price}</p>
      <h4>Ingredients:</h4>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Description: {pizza.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Pizza;
