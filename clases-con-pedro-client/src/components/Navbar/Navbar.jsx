import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <h3>
        <Link className="links" to="/">
          ClasesConPedro
        </Link>
      </h3>
      <ul>
        <li>
          <Link className="links" to="/estudiantes">
            Estudiantes
          </Link>
        </li>

        <li>
          <Link className="links" to="asistencia">
            Asistencia
          </Link>
        </li>
      </ul>
    </div>
  );
}
