import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - La URL de la landing no es correcta</h1>
      <p>La pagina que usted esta viendo no existe.</p>
      <Link to="/">Volver al Home</Link>
    </div>
  );
};

export default NotFound;
