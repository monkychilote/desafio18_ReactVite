import React from "react";
import ReactDOM from "react-dom/client"; // Nota: Aquí importamos 'react-dom/client'
import App from "./App.jsx"; // Asegúrate de que este sea el nombre correcto
import "./index.css"; // Si tienes estilos globales

// Esto es lo nuevo en React 18:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
