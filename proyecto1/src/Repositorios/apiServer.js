import axios from 'axios'
export async function getUsuarios(){
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    return resp.data;
}