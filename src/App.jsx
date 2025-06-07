import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu.jsx'
import Home from './pages/Home.jsx'
import ListaAlumnos from './components/ListaAlumnos.jsx'
import Perfil from './pages/Perfil.jsx'
import Nuevo from "./pages/Nuevo.jsx";
import AcercaDe from './pages/AcercaDe.jsx'
import { useState, useCallback } from 'react'


function App() {
  const [alumnos, setAlumnos] = useState([]);

  const borrarAlumno = (id) => {
    const alumnosActualizados = alumnos.filter((alumno) => alumno.id !== id);
    setAlumnos(alumnosActualizados);
  };
   const agregarAlumno = useCallback((alumno) => {
    setAlumnos(prev => [...prev, alumno]);
  }, []);

  const actualizarAlumno = useCallback((alumnoActualizado) => {
    setAlumnos(prev => 
      prev.map(a => (a.id === alumnoActualizado.id ? alumnoActualizado : a))
    );    
  }, []);
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/alumnos" element={<ListaAlumnos alumnos={alumnos} borrarAlumno={borrarAlumno}/>} />
          <Route path="/alumnos/nuevo" element={<Nuevo alumnos={alumnos} manejarAlumno={agregarAlumno}/>} />
          <Route path="/alumnos/:id" element={<Perfil alumnos={alumnos}/>} />
          <Route path="/alumnos/:id/editar" element={<Nuevo alumnos={alumnos} manejarAlumno={actualizarAlumno}/>} />
          
          <Route path="/acercade" element={<AcercaDe/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
