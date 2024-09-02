import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
// import { pizzas } from "../pizzas";  // Esta línea se puede comentar o eliminar si ya no utilizas el array estático

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div>
      {pizzas.map((pizza) => (
        <div key={pizza.id}>
          <h2>{pizza.name}</h2>
          <p>{pizza.description}</p>
          <p>Price: ${pizza.price}</p>
          <img src={pizza.image} alt={pizza.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;
