import React from 'react'
import { Botones } from '../../UI/Botones/Botones'

export const Header = () => {
  return (
    <div className='headerDiv'>
        <Botones butMensaje="Home"/>
        <Botones butMensaje="About us"/>
        <Botones butMensaje="Contact"/>
    </div>
    
  )
}


