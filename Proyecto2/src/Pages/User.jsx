import useUserStore from "../Stores/userStore"

export default function Login() {
  const userStore = useUserStore();
  const {name, email} = userStore.usuarioActivo ?? { name:'', email: ''};

  /* -=== Funcionalidad ===- */
  
  /* -=== Estilos ===- */
  const formStyle ={
    display: 'flex',
    gap: '1rem'
}

const fieldGroupStyle = {
    display:'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'flex-start'
  }

  return (
    <>
      <h1>Esto es una app de Login</h1>
      {userStore.isLogged() ? 
            <article style={formStyle}>
                <div style={fieldGroupStyle}>
                <span><strong>Nombre</strong></span>
                <span>{name}</span>
                </div>
                <div style={fieldGroupStyle}>
                <span><strong>E-mail</strong></span>
                <span>{email}</span>
                </div>
            </article> 
        :
            <h2>Usuario no encontrado</h2>
      }
    </>
  )
}