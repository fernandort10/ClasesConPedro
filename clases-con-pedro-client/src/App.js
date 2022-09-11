import MainPage from "./components/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import Estudiantes from "./components/Estudiantes/Estudiantes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/estudiantes" element={<Estudiantes />} />
      </Routes>
    </div>
  );
}

export default App;
