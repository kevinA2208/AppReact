import React from 'react'
import { Botones } from '../../UI/Botones/Botones'
import { Inputs } from '../../UI/Inputs/Inputs'


export const MainLogin = () => {
  return (
    <div id='LoginMain'>
        <form id='LoginForm'>
            <h1 id='loginTitle'>LOGIN</h1>
            <h2 id='loginName'>Nombre:</h2>
            <Inputs tipo="text" texto="Ingrese su nombre" id="loginNameInput"/>
            <h2 id='loginPassw'>Contraseña:</h2>
            <Inputs tipo="password" texto="Ingrese su contraseña" id="loginPasswInput"/>
            <Botones butMensaje="Log in" id="loginBtn"/>
        </form>
    </div>
  )
}
