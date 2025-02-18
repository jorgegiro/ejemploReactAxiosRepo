import { useState } from "react";
import { getUsuarios } from '../Repositorios/apiServer'

export default function ListaUsuarios(props){
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
            <h2>usuarios cargados al hacer click</h2>
            <button onClick={()=> handleUpdateUsersList()}>Cargar usuarios</button>
            <ul>
                {listItems}
            </ul>
        </>
    )
}