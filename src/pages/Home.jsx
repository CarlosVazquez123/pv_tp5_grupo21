import React from "react";

function Home() {

    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">Gestion de alumnos grupo 21 Programacion visual</h1>
            <p className="text-md mb-4 text-blue-850 font-bold">
                Bienvenido a nuestro sistema de gestion de alumnos en el cual nos vamos a encargar de aplicar lo aprendido hasta ahora.
            </p>
            <p className="text-lg text-gray-700">
                En el grupo 21 proponemos agregar, editar, eliminar y consultar información de los alumnos registrados en nuestro proyecto.
            </p>
            <p className="text-md mb-4 text-black">
                La aplicación está desarrollada con las siguientes tecnologías clave:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>
                    <span className="font-bold text-black">React:</span> Biblioteca de JavaScript para construir interfaces de usuario mediante componentes reutilizables y manejo eficiente del estado.
                </li>
                <li>
                    <span className="font-bold text-black">Vite:</span> Herramienta moderna para construir y servir aplicaciones web con tiempos de arranque ultrarrápidos y recarga instantánea durante el desarrollo.
                </li>
                <li>
                    <span className="font-bold text-black">React Router DOM:</span> Librería para gestionar la navegación y las rutas dentro de aplicaciones React, permitiendo vistas dinámicas y transiciones fluidas.
                </li>
            </ul>
            <p className="text-sm text-gray-500 italic">
             Gracias por interesarte en la aplicacion.Podés usar el menú de navegación superior para desplazarte por la aplicacion web.
            </p>
        </div>

    );
}

export default Home;
