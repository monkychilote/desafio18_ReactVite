import React from "react";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext'; // Importamos el contexto
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const { totalAmount } = useCart(); // Asegúrate de que el contexto está correctamente configurado
  const token = false; // Este valor puede cambiar según tu sistema de autenticación

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Pizzería Mamma Mia!
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              🍕 Inicio
            </Link>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  🔓 Profile
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔒 Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  🔐 Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  🔐 Registrate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  🔐 Profile
                </Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              🛒 Total Carrito: ${totalAmount ? totalAmount.toLocaleString() : "0"} {/* Mostramos el total del carrito dinámicamente */}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
