import React from "react";

export default function ListaAsignatura({ estudiantes, titulo }) {
  return (
    <div>
      <h1 style={{ color: "black" }}>{titulo}</h1>
      {estudiantes.map((item, index) => (
        <div key={index}>
          <h5>{item.nombreEstudiante}</h5>
          <div>
            <p>Calificacion: {item.calificacion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
