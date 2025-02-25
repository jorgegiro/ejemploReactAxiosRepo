import { Link } from 'react-router-dom'
import ListaUsuarios from '../Components/ListaUsuarios'
import RegistroUsuario from '../Components/RegistroUsuario'

export default function Home() {
  

  return (
    <>
      <h1>Esto es una app de ejemplo. Con Componente</h1>
      <RegistroUsuario />
      <ListaUsuarios />

      <Link to='Login'>Login</Link>
    </>
  )
}