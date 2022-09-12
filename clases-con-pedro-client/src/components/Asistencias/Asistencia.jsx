import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import "./Asistencia.css";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function Asistencia() {
  const [asistencia, setAsistencia] = useState([]);
  const handleCloseUpdate = () => setshowUpdateEstudiante(false);
  const handleShowUpdate = () => setshowUpdateEstudiante(true);
  const [showUpdateEstudiante, setshowUpdateEstudiante] = useState(false);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const userData = {
      id_estudiante: data.id_estudiante,
      id_asignatura: data.id_asignatura,
      asistencia: data.asistencia,
      fecha: data.fecha,
    };
    console.log(userData);
    axios
      .post("https://localhost:7132/api/Asistencias", userData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data.token);
      });
    window.location.reload(false);
  };

  const handleChange2 = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const [data, setData] = useState({
    id_estudiante: 0,
    id_asignatura: 0,
    asistencia: "",
    fecha: "",
  });

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
      <div className="titulo-boton">
        <h1>Asitencia</h1>
        <Button
          onClick={handleShowUpdate}
          className="boton-abrir-asistencia"
          variant="primary"
        >
          Agregar Asistencia
        </Button>
      </div>

      <Modal show={showUpdateEstudiante} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Estudiante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitUpdate}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id del Estudiante</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserte el id del Estudiante"
                autoFocus
                name="id_estudiante"
                value={data.id_estudiante}
                onChange={handleChange2}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id de la Asignatura</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserte el id de la Asignatura"
                autoFocus
                name="id_asignatura"
                value={data.id_asignatura}
                onChange={handleChange2}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Asistencia</Form.Label>
              <Form.Control
                type="email"
                placeholder="P para presente A para ausente"
                autoFocus
                value={data.asistencia}
                name="asistencia"
                onChange={handleChange2}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="email"
                placeholder="YYYY-MM-DD"
                autoFocus
                name="fecha"
                value={data.fecha}
                onChange={handleChange2}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmitUpdate}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

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
