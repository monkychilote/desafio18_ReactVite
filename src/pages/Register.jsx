import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css"; // Archivo CSS personalizado para el registro

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Validación de todos los campos obligatorios
    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    // Validación de longitud de la contraseña
    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Validación de coincidencia de contraseña y confirmación
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    // Si todas las validaciones pasan
    setMessage("Registro exitoso.");
  };

  return (
    <div className="register-container container-fluid d-flex justify-content-center align-items-center">
      <div className="register-box row">
        <div className="col-md-6 d-none d-md-block register-image">
          {/* Imagen de fondo o diseño */}
        </div>
        <div className="col-md-6 p-5">
          <div className="welcome-text">
            <h1>
              Crea <br /> tu cuenta!
            </h1>
          </div>
          <form onSubmit={handleRegister}>
            <div className="form-group mb-3">
              <label>Correo Electronico</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Confirma tu Password</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-block" type="submit">
                Registrate
              </button>
            </div>
          </form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
          <div className="social-links mt-4 text-center">
            <span>SIGUEME</span>
            <div className="mt-2">
              <a href="#">
                <i className="fab fa-facebook-f mx-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter mx-2"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram mx-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
