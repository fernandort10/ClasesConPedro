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
import Table from "react-bootstrap/Table";

export default function Estudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [listaEstudiantes, setlistaEstudiantes] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseDelete = () => setShow(false);
  const handleShowDelete = () => setShow(true);

  const handleCloseUpdate = () => setshowUpdateEstudiante(false);
  const handleShowUpdate = () => setshowUpdateEstudiante(true);

  const [showAddEstudiante, setshowAddEstudiante] = useState(false);
  const [showUpdateEstudiante, setshowUpdateEstudiante] = useState(false);
  const handleCloseAdd = () => {
    setshowAddEstudiante(false);
  };

  const handleShowAdd = () => setshowAddEstudiante(true);

  const [showEstudiantes, setshowEstudiante] = useState(false);
  const [showAddEstudiantes, setshowAddEstudiantes] = useState(false);

  const handleShowAddEs = () => setshowAddEstudiantes(true);
  const handleCloseAddEs = () => setshowAddEstudiantes(false);

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

  const handleSubmitDelete = (e) => {
    e.preventDefault();
    const userData = {
      id_calificacion: data.id_calificacion,
      id_estudiante: data.id_estudiante,
      id_asignatura: data.id_asignatura,
      calificacion: data.calificacion,
    };
    try {
      axios.delete(
        `https://localhost:7132/api/Estudiantes/${userData.id_estudiante}`,
        userData
      );
      console.log("borrado exitosamente");
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const userData = {
      id_calificacion: data.id_calificacion,
      id_estudiante: data.id_estudiante,
      id_asignatura: data.id_asignatura,
      calificacion: data.calificacion,
    };
    try {
      axios.put(`${url}/api/Calificaciones/${userData.id_calificacion}`, {
        id_calificaciones: 0,
        id_estudiante: 0,
        id_asignatura: 0,
        calificacion: 0,
      });
      console.log("actualizado exitosamente");
    } catch (err) {
      alert(err);
    }
  };

  const [data, setData] = useState({
    nombreEstudiante: "",
    id_calificacion: 0,
    id_estudiante: 0,
    id_asignatura: 0,
    calificacion: 0,
  });

  //   const addEstudiante = async () => {
  //     axios.post(`${url}/api/Estudiantes`).then(())
  //   };

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
    (e) => e.nombreAsignatura === "Ciencias Sociales"
  );

  const español = estudiantes.filter(
    (e) => e.nombreAsignatura === "Lengua Española"
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      nombreEstudiante: data.nombreEstudiante,
    };

    axios
      .post("https://localhost:7132/api/Estudiantes", userData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data.token);
      });
  };

  const handleSubmitEA = (e) => {
    e.preventDefault();
    const userData = {
      id_estudiante: data.id_estudiante,
      id_asignatura: data.id_asignatura,
      calificacion: data.calificacion,
    };
    console.log(userData);
    axios
      .post("https://localhost:7132/api/Calificaciones", userData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data.token);
      });

    window.location.reload(false);
  };

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
            onClick={handleShowAddEs}
          >
            Añadir Estudiante
          </Button>

          <Button
            className="boton-abrir"
            variant="primary"
            onClick={handleShowAdd}
          >
            Añadir Estudiante a Asignatura
          </Button>

          <Button
            className="boton-abrir"
            variant="primary"
            onClick={handleShowUpdate}
          >
            Actualizar Estudiante
          </Button>

          <Button
            className="boton-abrir"
            variant="danger"
            onClick={handleShowDelete}
          >
            Eliminar Estudiante
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

      <Modal show={showAddEstudiantes} onHide={handleCloseAddEs}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Estudiante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserte el nombre del estudiante"
                name="nombreEstudiante"
                value={data.nombreEstudiante}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddEs}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Estudiante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserte el id del estudiante"
                name="id_estudiante"
                value={data.id_estudiante}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button type="submit" variant="danger" onClick={handleSubmitDelete}>
            Borrar Estudiante
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddEstudiante} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Estudiante a Asignatura</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitEA}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id del estudiante</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserte el id del estudiante"
                autoFocus
                name="id_estudiante"
                value={data.id_estudiante}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id de la Asignatura</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserte el id de la asignatura"
                autoFocus
                name="id_asignatura"
                value={data.id_asignatura}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Calificacion</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserte la calificacion"
                autoFocus
                name="calificacion"
                value={data.calificacion}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmitEA}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdateEstudiante} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Actualizar Estudiante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitUpdate}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id de la calificacion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserte el id de la claificacion"
                autoFocus
                name="id_calificacion"
                value={data.id_calificacion}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id del Estudiante</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserte el id del estudiante"
                autoFocus
                name="id_estudiante"
                value={data.id_estudiante}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id de la asignatura</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserte el id de la asignatura"
                autoFocus
                name="id_asignatura"
                value={data.id_asignatura}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Calificacion</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserte la calificacion"
                autoFocus
                name="calificacion"
                value={data.calificacion}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmitUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEstudiantes} onHide={handleCloseShow}>
        <Modal.Header closeButton>
          <Modal.Title>Lista de Estudiantes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped>
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
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
