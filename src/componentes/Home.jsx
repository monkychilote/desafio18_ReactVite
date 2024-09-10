import React from 'react';
import CardPizza from "./CardPizza"; // Asegúrate de que la ruta sea correcta
import { usePizzas } from '../context/PizzaContext';  // Consumimos el contexto de las pizzas

const Home = () => {
  const { pizzas, loading, error } = usePizzas();  // Obtenemos las pizzas desde el contexto

  if (loading) return <p>Cargando pizzas...</p>;
  if (error) return <p>Error al cargar pizzas: {error}</p>;

  return (
    <div className="container">
      <div className="row">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <CardPizza 
              key={pizza.id}
              pizza={pizza}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.image}
            />
          ))
        ) : (
          <p>No hay pizzas disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
