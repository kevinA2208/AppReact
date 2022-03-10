import React, {useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

export const MainLogin = () => {


  //Se crea el state con un formulario que incluya los datos de username y password vacios
  const [state, setState] = useState({
    form:{
      "username":"",
      "password":"",
    },
    error:false,
    errorMsg:""
  })

  //Funcion para que no recargue la pagina
  const submitRecharge=(e)=>{
    e.preventDefault()
  }

//el async funciona para que haga lo de la funcion sin necesidad de actualizar la pagina
//Funcion para cambiar la informacion del form por nueva informacion ingresada en el input
  const formSetter = async (e)=>{
    await setState({
      form:{
        //Los tres puntos traen los datos del objeto state de arriba vacios, iterando cada valor que hay para despues settearlos
        ...state.form,
        //Despues reemplaza los valores que atrapó en los inputs y los pone en el setstate
        [e.target.name]: e.target.value
      }
    })
  }

  /*   se trae la url del api de login,  Despues con axios se le envia la url de la api y el state 
  form que incluye el username y el password y verifica los datos, se crea una promesa donde se trae la respuesta, 
  si la respuesta es ok que envie un mensaje a la consola diciendo
  usuario logueado correctamente, de lo contrario que imprima el mensaje de error de la api
  tambien tiene un catch que atrapa el error de no ser que la api se haya conectado correctamente */

  const postForm=()=>{
    let url="https://backend-edw.herokuapp.com/login"
    axios.post(url, state.form)
    .then(response => {
      console.log(response);
        if(response.data.status === 200){
          console.log("Usuario logueado correctamente")
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

  /*   Despues se inserta la funcion de submitRecharge para que al enviar el formulario no recargue la pagina
  Tambien se inserta la funcion formSetter en los inputs para settear la informacion de estos inputs en el objeto del state
  al final se inserta la funcion postForm para enviar el form al api y que valide la información, loguenado al usuario */

  return (
    <div id='LoginMain'>
      <form id='LoginForm' onSubmit={submitRecharge}>
        <h1 className='titleForms'>Log In</h1>
        <div className='txt_field'>
          <h2 className='titleForms'>Nombre:</h2>
          <input placeholder='Ingrese su nombre de usuario' type="text" id="loginNameInput" name="username" onChange={formSetter}/>
        </div>
        <div className='txt_field'>
          <h2 className='titleForms'>Contraseña:</h2>
          <input placeholder='Ingrese su contraseña' type="password" id="loginPasswInput" autoComplete='off' name="password" onChange={formSetter}/>
          <span></span>
        </div>
                
        <div className='divbtn'>
          <input className="inputsLogin" type="submit" value="Log in" onClick={postForm}/>
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
