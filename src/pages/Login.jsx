import React, { useState } from "react";
import "./Login.css"; // Importamos los estilos CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validación de que todos los campos sean obligatorios
    if (!email || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    // Validación de la longitud de la contraseña
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Si todas las validaciones pasan
    setMessage("Inicio de sesión exitoso.");
  };

  return (
    <main>
      <div className="login-container">
        <div className="login-box">
          <div className="welcome-text">
            <h1>LOGIN</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Correo Electronico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="options">
              <label>
                <input type="checkbox" /> Recuerdame
              </label>
              <a href="#">Recuperar Password?</a>
            </div>
            <div className="buttons">
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>
          </form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
          <div className="social-links">
            <span>Sigueme</span>
            <div>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
