import { useState } from "react";
import { getUsuarios } from '../Repositorios/apiServer'
import { useNavigate } from "react-router-dom";

export default function ListaUsuarios(props){
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    async function handleUpdateUsersList(){
        const usuarios  = await getUsuarios()
        setUsers(usuarios); 
        setTimeout(()=> {
            navigate('/about')
        }, 2000)
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