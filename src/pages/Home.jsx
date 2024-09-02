import React, { useEffect, useState } from "react";
import Header from "../componentes/Header";
import CardPizza from "../componentes/CardPizza";

const Home = () => {
  // Estado para almacenar las pizzas
  const [pizzas, setPizzas] = useState([]);

  // Efecto para consumir la API de pizzas cuando se monta el componente
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error fetching pizzas:", error));
  }, []);

  return (
    <main>
      <Header />
      <div className="container">
        <div className="row card-deck">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
