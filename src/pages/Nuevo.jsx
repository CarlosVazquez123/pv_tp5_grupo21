import {React, useState, useEffect} from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';

const Nuevo = ({alumnos, manejarAlumno}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const nuevoid = useMemo(() => {

        return alumnos.length > 0 ? Math.max(...alumnos.map(a => a.id)) + 1 : 1;
            
    }, [alumnos]);

    
    const [alumno, setAlumno] = useState({
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
            setAlumno(alumnos.find(alumno => alumno.id === parseInt(id))); 
    }, [id]);


    const onChange = (e) => {
        const { name, value } = e.target;
        setAlumno((prev) => ({...prev, [name]: value }));
    };

    const handleSubmit = (alumno) => {
        alumno.preventDefault();


        if(alumnos.includes(alumno.lu)) 
            alert('El LU ya existe');
        else{
        manejarAlumno(alumno);
        setAlumno({
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
                <label>Nombre: <input type="text" name="nombre" value={alumno.nombre} onChange={onChange} required/></label>
                <label>Apellido: <input type="text" name="apellido" value={alumno.apellido} onChange={onChange} required/></label>
                <label>Lu: <input type="text" name="lu" value={alumno.lu} onChange={onChange} required/></label>
                <label>Edad: <input type="number" name="edad" value={alumno.edad} onChange={onChange} required/></label>
                <label>Curso: <input type="text" name="curso" value={alumno.curso} onChange={onChange} required/></label>
                <label>Email: <input type="email" name="email" value={alumno.email} onChange={onChange} required/></label>
                <label>Domicilio: <input type="text" name="domicilio" value={alumno.domicilio} onChange={onChange} required/></label>
                <label>Telefono: <input type="tel" name="telefono" value={alumno.telefono} onChange={onChange} required/></label>
                <div>
                    <button type="submit">Guardar</button>
                    <button><Link to={`/alumnos`}>Atras</Link>    </button>
                </div>
            </form>      
        </div>
    )
}

export default Nuevo;