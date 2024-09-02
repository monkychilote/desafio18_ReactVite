import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - La URL de la landing no es correcta</h1>
      <p>La página que usted está viendo no existe.</p>
      <Link to="/">Volver al Home</Link>
    </div>
  );
};

export default NotFound;
