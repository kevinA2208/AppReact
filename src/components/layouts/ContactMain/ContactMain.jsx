import React from 'react'
import { Inputs } from '../../UI/Inputs/Inputs'


export const ContactMain = () => {
  return (
    <div id="contactDiv">
        <form id="contactForm">
            <h3 id="nameContact">Nombre:</h3>
            <Inputs tipo="text"  texto="Ingrese su nombre" id="nameForm"/>
            <h3 id="emailContact">Correo:</h3>
            <Inputs tipo="mail"  texto="Ingrese su email" id="mailForm"/>
            <h3 id="msgContact">Mensaje:</h3>
            <textarea id="msgForm" placeholder="Ingrese el texto"></textarea>
            <Inputs tipo="submit" id="submitBtn"/>
        </form>
    </div>
  )
}
