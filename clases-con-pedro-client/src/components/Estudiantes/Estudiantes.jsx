import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./ListaAsignatura.css";
import axios from "axios";
import ListaAsignatura from "../Asignaturas/ListaAsignatura";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function Estudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [listaEstudiantes, setlistaEstudiantes] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showAddEstudiante, setshowAddEstudiante] = useState(false);
  const handleCloseAdd = () => setshowAddEstudiante(false);
  const handleShowAdd = () => setshowAddEstudiante(true);

  const [showEstudiantes, setshowEstudiante] = useState(false);
  const handleCloseShow = () => setshowEstudiante(false);
  const handleShowShow = () => {
    setshowEstudiante(true);
    mostrarListaEstudiantes();
  };

  const url = "https://localhost:7132";

  const mostrarEstudiantes = async () => {
    axios
      .get(`${url}/api/Calificaciones/withnames`)
      .then((json) => {
        setEstudiantes(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const mostrarListaEstudiantes = async () => {
    axios
      .get(`${url}/api/Estudiantes`)
      .then((json) => {
        setlistaEstudiantes(json.data);
        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    mostrarEstudiantes();
  }, []);

  const matematicas = estudiantes.filter(
    (e) => e.nombreAsignatura === "Matematicas"
  );

  const sociales = estudiantes.filter(
    (e) => e.nombreAsignatura === "Ciencias Naturales"
  );

  const naturales = estudiantes.filter(
    (e) => e.nombreAsignatura === "Ciencias Naturales"
  );

  const español = estudiantes.filter(
    (e) => e.nombreAsignatura === "Lengua Española"
  );

  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1>Lista de Estudiantes por Asignatura</h1>
        <div className="boton-abrir">
          <Button
            className="boton-abrir"
            variant="primary"
            onClick={handleShowShow}
          >
            Desplegar Lista de Estudiantes
          </Button>

          <Button
            className="boton-abrir"
            variant="primary"
            onClick={handleShow}
          >
            Añadir Estudiante
          </Button>

          <Button
            className="boton-abrir"
            variant="primary"
            onClick={handleShowAdd}
          >
            Añadir Asignatura
          </Button>
        </div>
        <div className="estudiantes-container">
          <ListaAsignatura estudiantes={matematicas} titulo="Matematicas" />
          <ListaAsignatura estudiantes={sociales} titulo="Ciencias Sociales" />
          <ListaAsignatura
            estudiantes={naturales}
            titulo="Ciencias Naturales"
          />
          <ListaAsignatura estudiantes={español} titulo="Lengua Española" />
        </div>
      </div>
      <Footer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Estudiante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserte el nombre del estudiante"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddEstudiante} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Asignatura</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id del estudiante</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserte el id del estudiante"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id de la Asignatura</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserte el id de la asignatura"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEstudiantes} onHide={handleCloseShow}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Asignatura</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <thead>
              <tr>
                <th>Id del estudiante</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {listaEstudiantes.map((item, index) => (
                <tr key={index}>
                  <td>{item.id_estudiante}</td>
                  <td>{item.nombreEstudiante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
