import React from "react";
import { useParams, Link } from "react-router-dom";

const Perfil = ({ alumnos }) => {
  const { id } = useParams();
  const alumno = alumnos.find((u) => u.id === parseInt(id));

  if (!alumno) {
    return <h2>Alumno no encontrado</h2>;
  }

  return (
    <div>
      <h2>Perfil de {alumno.nombre}</h2>
      <p>LU: {alumno.lu}</p>
      <p>Nombre: {alumno.nombre}</p>
      <p>Apellido: {alumno.apellido}</p>
      <p>Curso: {alumno.curso}</p>
      <p>Edad: {alumno.edad}</p>
      <p>Email: {alumno.email}</p>
      <p>Domicilio: {alumno.domicilio}</p>
      <p>Teléfono: {alumno.telefono}</p>
      <button><Link to={`/alumnos/${alumno.id}/editar`}>Editar</Link></button>
      <button><Link to={`/alumnos`}>Volver</Link></button>
    </div>
  );
};

export default Perfil;