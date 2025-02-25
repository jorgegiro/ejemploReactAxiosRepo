import axios from 'axios'

export async function getUsuarios(){
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    return resp.data;
}

export async function crearUsuario({nombre, email, telefono}){
    /** Ejemplo de objeto User devuelto por la API 
 {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
 */
    const resp = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name: nombre,
        email: email,
        phone: telefono
    })

    return resp.data;
}

export async function findUser(email){
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
    return resp.data!= null && resp.data.length > 0 ?  resp.data[0] : null;
}