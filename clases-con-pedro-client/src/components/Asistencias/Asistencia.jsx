import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import "./Asistencia.css";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";

export default function Asistencia() {
  const [asistencia, setAsistencia] = useState([]);

  const url = "https://localhost:7132";

  const mostrarAsistencia = async () => {
    axios
      .get(`${url}/api/Asistencias/withnames`)
      .then((json) => {
        setAsistencia(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    mostrarAsistencia();
  }, []);

  return (
    <div className="containers">
      <Navbar />
      <h1>Asitencia</h1>
      <div className="container1">
        <Table striped>
          <thead>
            <tr>
              <th>Estudiante</th>
              <th>Asignatura</th>
              <th>Asistencia</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {asistencia.map((item, index) => (
              <tr key={index}>
                <td>{item.nombreEstudiante}</td>
                <td>{item.nombreAsignatura}</td>
                <td>{item.asistencias}</td>
                <td>{item.fecha}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
}
