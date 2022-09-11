import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <h3>ClasesConPedro</h3>
      <ul>
        <li>Estudiantes</li>
        <li>Asignaturas</li>
        <li>Asistencia</li>
        <li>
          <button>Log Out</button>
        </li>
      </ul>
    </div>
  );
}
