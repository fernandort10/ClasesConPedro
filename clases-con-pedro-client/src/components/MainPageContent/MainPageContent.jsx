import React from "react";
import "./MainPageContent.css";
export default function MainPageContent() {
  return (
    <div className="mainpagecontent-container">
      <div className="welcome-container">
        <h1>Bienvenido Pedro!</h1>
        <p>A tu plataforma de manejo de clases.</p>
      </div>

      <div className="asignaturas-container">
        <h1>Asignaturas</h1>
        <ul>
          <li>Ciencias Sociales - Lunes y miercoles de 8 am a 10 am</li>
          <li>Matematicas - Martes y jueves de 8 am a 10 am</li>
          <li>Lengua Española - Lunes y miercoles de 11 am a 1 pm</li>
          <li>Ciencias Naturales - Martes y jueves 11 am a 1 pm</li>
        </ul>
      </div>
    </div>
  );
}
