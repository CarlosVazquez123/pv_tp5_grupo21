import React from "react";
import { Link } from "react-router-dom";

const ListaAlumnos = ({ alumnos, borrarAlumno }) => {
  if (alumnos.length === 0) {
    return (
      <div>
        <h1>No hay alumnos</h1>
        <button><Link to="/alumnos/nuevo">Agregar un alumno</Link></button>
      </div>
    );
  }

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.id}>
            <strong>{alumno.id} - {alumno.nombre} {alumno.apellido}</strong>
            <button onClick={() => borrarAlumno(alumno.id)}>Eliminar</button>
            <button><Link to={`/alumnos/${alumno.id}/editar`}>Editar</Link></button>
            <button><Link to={`/alumnos/${alumno.id}`}>Ver Detalles</Link></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAlumnos;