import { useNavigate } from "react-router-dom"

const LoginPages = () => {
  const navigate=useNavigate();

  const logIn=()=>{
    navigate("/inicio");
  }
  return (
    <div className="container">
      <div className="registro">
<button onClick={logIn} className="btn_ingresar">Ingresando a Heroes 😇</button>

      </div>


    </div>
  )
}

export default LoginPages