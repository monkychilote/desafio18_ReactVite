import React from "react";
import ReactDOM from "react-dom/client"; // Nota: Aquí cambiamos 'react-dom' a 'react-dom/client'
import App from "./App.jsx"; // Asegúrate de que este nombre sea correcto
import "./index.css"; // Si tienes un archivo de estilos globales

// Este es el nuevo método de renderizado en React 18:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
