import React from 'react'
import { NavLink } from 'react-router-dom'
import { Botones } from '../../UI/Botones/Botones'

export const Header = () => {
  return (
    <div className='headerDiv'>
      <NavLink to="/"> <Botones butMensaje="Home"/></NavLink>
      <NavLink to="/AboutUs"><Botones butMensaje="About us"/></NavLink>
      <NavLink to="/Contact"><Botones butMensaje="Contact"/></NavLink>
      <NavLink to="/Counter"><Botones butMensaje="Counter"/></NavLink>
      <NavLink to="/CounterImage"><Botones butMensaje="Counter Image"/></NavLink>
    </div>
    
  )
}


