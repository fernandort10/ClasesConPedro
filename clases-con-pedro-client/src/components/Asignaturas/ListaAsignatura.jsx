import React from "react";
import "../Estudiantes/ListaAsignatura.css";

export default function ListaAsignatura({ estudiantes, titulo }) {
  return (
    <div>
      <div>
        <h1 style={{ color: "black" }}>{titulo}</h1>
        {estudiantes.map((item, index) => (
          <div key={index} className="container-calificaciones">
            <h6>Id de la calificacion: {item.id_calificaciones}</h6>
            <h5>{item.nombreEstudiante}</h5>
            <div>
              <p>Calificacion: {item.calificacion}</p>
              <p>
                {item.calificacion >= 90
                  ? "A"
                  : item.calificacion >= 80
                  ? "B"
                  : item.calificacion >= 70
                  ? "C"
                  : item.calificacion <= 69
                  ? "F"
                  : "F"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
