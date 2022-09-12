import MainPage from "./components/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import Estudiantes from "./components/Estudiantes/Estudiantes";
import Asistencia from "./components/Asistencias/Asistencia";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/estudiantes" element={<Estudiantes />} />
        <Route path="/asistencia" element={<Asistencia />} />
      </Routes>
    </div>
  );
}

export default App;
