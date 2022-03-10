import React from 'react'

export const RegisterMain = () => {
  return (
    <div>
        <form id="contactForm" onSubmit="">
            <h1 id='titleContact'>Register</h1>
            <h3 id="nameContact">Nombre:</h3>
            <input  name="user_name" type="text" texto="Ingrese su nombre" id="nameForm"/>

            <h3 id="emailContact">Correo:</h3>
            <input name="user_email" type="mail"  texto="Ingrese su email" id="mailForm"/>

            <h3 id="msgContact">Contraseña:</h3>
            <input name="user_password" type="password"/>

            <input type="submit" className="submitBtn"/>
        </form>
    </div>
  )
}
