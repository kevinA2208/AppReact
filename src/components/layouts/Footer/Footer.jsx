import React from 'react'
import { Botones } from '../../UI/Botones/Botones'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footerDiv'>
        <NavLink to="/PageOnOff"><Botones butMensaje="Page on/off"/></NavLink>
        <Botones butMensaje="e"/>
        <Botones butMensaje="i"/>
    </div>
  )
}
