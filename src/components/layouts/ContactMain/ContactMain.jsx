import React from 'react'

export const ContactMain = () => {
  return (
    <div id="contactDiv">
        <form id="contactForm">
            <h3 id="nameContact">Nombre:</h3>
            <input id="nameForm" type="text" placeholder="Ingrese su nombre"></input>
            <h3 id="emailContact">Correo:</h3>
            <input id="mailForm" type="mail" placeholder="Ingrese su correo"></input>
            <h3 id="msgContact">Mensaje:</h3>
            <textarea id="msgForm" placeholder="Ingrese el texto"></textarea>
            <input id="submitBtn" type="submit"></input>
        </form>
    </div>
  )
}
