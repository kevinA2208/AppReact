import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export const RegisterMain = () => {


  //Se crea el state con un formulario que incluya los datos de username, password y name vacios
  const [state, setState] = useState({
    form:{
      "username":"",
      "password":"",
      "name":"",
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

/*   se trae la url del api de registrar usuario,  Despues con axios se le envia la url de la api y el state 
  form que incluye el username el name y el password se crea una promesa donde se trae la respuesta, 
  si la respuesta es ok que envie un mensaje a la consola diciendo
  usuario registrado correctamente, de lo contrario que imprima el mensaje de error de la api
  tambien tiene un catch que atrapa el error de no ser que la api se haya conectado correctamente */
 
  const postForm=()=>{
    let url="https://backend-edw.herokuapp.com/usuario"
    axios.post(url, state.form)
    .then(response => {
      console.log(response);
        if(response.data.status === "ok"){
          console.log("usuario registrado")
        }else{
          setState({
            error:true,
            errorMsg:"Error al registrar al usuario, verifique los datos"
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
  al final se inserta la funcion postForm para enviar el form al api y que valide la información, registrando al usuario */
  return (
    <div id="registerMain">
        <form id="contactForm" onSubmit={submitRecharge}>
            <h1 className='titleForms'>Register</h1>
            <h2 className='titleForms'>Username:</h2>
            <input  name="username" type="text" placeholder="Ingrese su nombre de usuario" id="nameForm" onChange={formSetter}/>

            <h2 className='titleForms'>Nombre:</h2>
            <input name="name" type="text"  placeholder="Ingrese su nombre" id="realNameInput" onChange={formSetter}/>

            <h2 className='titleForms'>Contraseña:</h2>
            <input name="password" placeholder="Ingrese su contraseña" type="password" id="passwordForm" onChange={formSetter}/>

            <div id="botonesRegister">
              <input type="submit" value="Sign Up" className="inputsLogin" onClick={postForm}/>

              <NavLink to="/BotonLogin"><button className="inputsLogin" >Log In</button></NavLink>
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
