import React, {useState} from 'react'
import { Botones } from '../../UI/Botones/Botones'
import { Inputs } from '../../UI/Inputs/Inputs'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

export const MainLogin = () => {

  const [state, setState] = useState({
    form:{
      "username":"",
      "password":"",
    },
    error:false,
    errorMsg:""
  })

  //Evento para que no se recargue la página
  const manejadorSubmit=(e)=>{
    e.preventDefault()
  }

  //El async significa que no va a esperar a que el dom se recargue para ejecutar su función
  //Recoge la información del input
  const manejadorChange = async (e)=>{
    await setState({
      form:{
        //Los tres puntos traen los datos del objeto state de arriba y le cambian el valor al ingresado, iterando cada valor que hay
        ...state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  const manejadorBoton=()=>{
    let url="https://backend-edw.herokuapp.com/login"
    axios.post(url, state.form)
    .then(response => {
      console.log(response);
        if(response.data.status === "ok"){
          
        }else{
          setState({
            error:true,
            errorMsg:response.data.Message
          })
        }
    }).catch(error =>{
      console.log(error);
      setState({
        error:true,
        errorMsg:"Error al conectar con el API"
      })
    })
  }

  return (
    <div id='LoginMain'>
      <form id='LoginForm' onSubmit={manejadorSubmit}>
        <h1 id='loginTitle'>Log In</h1>
        <div className='txt_field'>
          <h2 id='loginName'>Nombre:</h2>
          <input placeholder='Ingrese su nombre de usuario' type="text" id="loginNameInput" name="username" onChange={manejadorChange}/>
        </div>
        <div className='txt_field'>
          <h2 id='loginPassw'>Contraseña:</h2>
          <input placeholder='Ingrese su contraseña' type="password" id="loginPasswInput" autoComplete='off' name="password" onChange={manejadorChange}/>
          <span></span>
        </div>
                
        <div className='divbtn'>
          <input className="inputsLogin" type="submit" value="Log in" onClick={manejadorBoton}/>
          <NavLink to="/BotonRegister"><button className="inputsLogin" >Sign Up</button></NavLink>
        </div>
        {state.error === true &&
          <div className="alerta">
            <p id='mensajeError'>{state.errorMsg}</p>
          </div>
      }
    </form>
  </div>
  )
}
