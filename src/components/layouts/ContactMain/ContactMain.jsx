import React from 'react'
import { Inputs } from '../../UI/Inputs/Inputs'
import emailjs from '@emailjs/browser'

export const ContactMain = () => {

  const sendEmail = (event) =>{
    event.preventDefault()

    emailjs.sendForm('service_sc0puiu' , 'template_8avmw6m' , event.target, 'oQ15VvVhPhKYEcYzP')

    .then(response => console.log(response))
    .catch(error => console.log(error))
  }


  return (
    <div id="contactDiv">
        <form id="contactForm" onSubmit={sendEmail}>
            <h1 id='titleContact'>Contact us</h1>
            <h3 id="nameContact">Nombre:</h3>
            <Inputs name="user_name" tipo="text"  texto="Ingrese su nombre" id="nameForm"/>

            <h3 id="emailContact">Correo:</h3>
            <Inputs name="user_email" tipo="mail"  texto="Ingrese su email" id="mailForm"/>

            <h3 id="msgContact">Mensaje:</h3>
            <textarea name="user_message" id="msgForm" placeholder="Ingrese el texto"></textarea>

            <input type="submit" className="submitBtn"/>
        </form>
    </div>
  )
}
