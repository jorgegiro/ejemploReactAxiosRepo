import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getUsuarios } from './Repositorios/apiServer'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  async function handleUpdateUsersList(){
    const usuarios  = await getUsuarios()
    setUsers(usuarios); 
  }

  const listItems = users.map(user =>
    <li key={user.id}>
      {user.name}
    </li>
  );

  return (
    <>
      <h1>Esto es una App de ejemplo. Sin componente</h1>
      <button onClick={()=> handleUpdateUsersList()}>Cargar usuarios</button>
      <ul>
        {listItems}
      </ul>
    </>
  )
}

export default App
