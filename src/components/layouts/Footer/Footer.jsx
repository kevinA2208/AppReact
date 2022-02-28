import React from 'react'
import { NavLink } from 'react-router-dom'
import { Botones } from '../../UI/Botones/Botones'

export const Footer = () => {
  return (
    <div className='footerDiv'>
       <NavLink to="/BotonOnPage"><Botones butMensaje="Page Off On"/></NavLink>
        <NavLink to="/BotonLogin"><Botones butMensaje="Login"/></NavLink>
        <Botones butMensaje="i"/>
    </div>
  )
}
