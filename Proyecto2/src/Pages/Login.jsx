import { findUser } from "../Repositorios/apiServer"
import { useState } from "react"
import  useUserStore from "../Stores/userStore"
import { useNavigate } from 'react-router-dom'


/* -=== SubComponente ===- */
function MensajeError({texto}){
  const hayError = !!texto;
  
  const mensajeErrorStyle = {
    color: 'red'
  }
  
  return (
    // se muestra si hay error. Si no hay error no muestra nada.
    // '&&' cumple esa funcion. Si la primera parte es true devuelve la segunda
    // si es false no muestra nada
    hayError && <span style={mensajeErrorStyle}>{texto}</span>
  )
}

// Email valido   : Sincere@april.biz
// Email no válido: Cualquier email inventado
export default function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [mensajeError, setError] = useState('')
  const userStore = useUserStore();
  const navigate = useNavigate();

  /* -=== Funcionalidad ===- */
  const updateEmail = function(e){
    const {value} = e.target
    setEmail(value)
  }
  const updatePass = function(e){
    const {value} = e.target
    setPass(value)
  }

  const handleSubmit = async function (e){
    // no se utiliza el pass por simplificar el ejemplo. 
    // además la api utilizada no devuelve ningun campo de password.
    // pero aquí se debería llamar al endpoint del servidor que se encargara de validar
    // el login del usuario.
    const userData = await findUser(email)
    if(userData){
      userStore.login(userData);
      navigate('/user')
      setError('')
    }
    else{
      setError('El email o la contraseña no son válidos')
    }
  }

  /* -=== Estilos ===- */
  const formStyle ={
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }

  const fieldGroupStyle = {
    display:'flex',
    gap: '1rem'
  }

  return (
    <>
      <h1>Esto es un ejemplo simple de app de Login</h1>
      <form style={formStyle}>
        <div style={fieldGroupStyle}>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value={email} onChange={updateEmail} />
        </div>
        <div style={fieldGroupStyle}>
          <label htmlFor="pass">Pass</label>
          <input type="password" name="pass" id="pass" value={pass} onChange={updatePass}  />
        </div>
        
        <MensajeError texto={mensajeError} />
        
        <button type="button" onClick={handleSubmit}>Login</button>
      </form>
    </>
  )
}