import {React, useState, useEffect} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';

const Nuevo = ({alumnos, editarAlumnos}) => {
    const { id } = useParams();
    const nuevoid = useMemo(() => {

        return alumnos.length > 0 ? Math.max(...alumnos.map(a => a.id)) + 1 : 1;
            
    }, [alumnos]);

    
    const [alumnos, setAlumnos] = useState({
        id: nuevoid,
        lu: '',
        nombre: '',
        apellido: '',
        curso: '',
        email: '',
        edad: '',
        telefono: '',
        domicilio: '',
    });
    
    useEffect(() => {
        if (id) 
            setAlumnos(alumnos.find(alumno => alumno.id === parseInt(id))); 
    }, [id]);


    const editarAlumnos = (alumno) => {
        const { name, value } = alumno.target;
        setAlumnos((prev) => ({...prev, [name]: value }));
    };

    const navigate = useNavigate();

    const handleSubmit = (alumno) => {
        alumno.preventDefault();
        if(alumnos.map((alumno) => alumno.lu).includes(alumnos.lu)) 
            alert('El LU ya existe');
        else{
        editarAlumnos(alumnos);
        setAlumnos({
            id: nuevoid,
            lu: '',
            nombre: '',
            apellido: '',
            curso: '',
            email: '',
            edad: '',
            telefono: '',
            domicilio: '',
        });
        navigate(-1);
        }
       
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>{id ? 'Editar Alumno' : 'Nuevo Alumno'}</h2>
                <label>Nombre: <imput type="text" name="nombre" value={alumnos.nombre} onchange={editarAlumnos} required/></label>
                <label>Apellido: <imput type="text" name="apellido" value={alumnos.apellido} onchange={editarAlumnos} required/></label>
                <label>Lu: <imput type="text" name="lu" value={alumnos.lu} onchange={editarAlumnos} required/></label>
                <label>Edad: <imput type="number" name="edad" value={alumnos.edad} onchange={editarAlumnos} required/></label>
                <label>Curso: <imput type="text" name="curso" value={alumnos.curso} onchange={editarAlumnos} required/></label>
                <label>Email: <imput type="email" name="email" value={alumnos.email} onchange={editarAlumnos} required/></label>
                <label>Domicilio: <imput type="text" name="domicilio" value={alumnos.domicilio} onchange={editarAlumnos} required/></label>
                <label>Telefono: <imput type="tel" name="telefono" value={alumnos.telefono} onchange={editarAlumnos} required/></label>
                <div>
                    <button type="submit">Guardar</button>
                    <button><Link to={`/alumnos`}>Atras</Link>    </button>
                </div>
            </form>      
        </div>
    )
}

export default Nuevo;