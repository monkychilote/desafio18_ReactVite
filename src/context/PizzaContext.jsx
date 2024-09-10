import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto
const PizzaContext = createContext();

// Hook personalizado para usar el contexto
export const usePizzas = () => useContext(PizzaContext);

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener las pizzas desde la API
  const fetchPizzas = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      if (!response.ok) throw new Error("Error fetching pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading, error }}>
      {children}
    </PizzaContext.Provider>
  );
};
