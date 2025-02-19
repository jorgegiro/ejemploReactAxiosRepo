import { useState } from "react";
import { crearUsuario } from '../Repositorios/apiServer'
import { useNavigate } from "react-router-dom";




export default function RegistroUsuario(props){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    const navigate = useNavigate();

    function handleCambioNombre(e){
        const { value } = e.target;
        setName(value);
    }
    
    function handleCambioEmail(e){
        const { value } = e.target;
        setEmail(value);
    }
    function handleCambioTelefono(e){
        const { value } = e.target;
        setTelefono(value);
    }

    async function crearUsuarioForm(e){
        const res = await crearUsuario({nombre: name, email: email, telefono: telefono})
        console.log(res);
        // Por no complicar, sabemos que ha ido bien si la respuesta tiene el campo Id.
        if(res.id) {
            navigate('/about')
        }
    }
    
    const labelStyle = {
        width: '10ch',
        display: 'inline-block'
    }

    const formStyle={
        marginBottom: '1rem'
    }
    
    const fieldsGroupStyle={
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        marginBottom: '1rem'
    }

    return (
        <>
        <h2>Crear Usuario</h2>
        <form style={formStyle}>
            <div style={fieldsGroupStyle}>
                <div>
                    <label htmlFor="nombre" style={labelStyle}>Nombre: </label>&nbsp;
                    <input type="text" id="nombre" value={name} onChange={handleCambioNombre} />
                </div>
                <div>
                    <label htmlFor="email" style={labelStyle}>Email: </label>&nbsp;
                    <input type="text" id="email" value={email} onChange={handleCambioEmail} />
                </div>
                <div>
                    <label htmlFor="telefono" style={labelStyle}>Telefono: </label>&nbsp;
                    <input type="text" id="telefono" value={telefono} onChange={handleCambioTelefono} />
                </div>
            </div>
            <button type="button" onClick={crearUsuarioForm}>Crear usuario</button>
        </form>
        </>
    )
}