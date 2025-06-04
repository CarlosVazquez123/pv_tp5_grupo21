import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="menu">
            <Link to="/">Inicio</Link>
            <Link to="/alumnos">Alumnos</Link>
            <Link to="/alumnos/nuevo">Nuevo Alumno</Link>
            <Link to="/acercade">Acerca de</Link>
        </nav>
    );
};

export default Menu;