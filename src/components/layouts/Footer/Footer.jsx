import React from 'react'
import { Botones } from '../../UI/Botones/Botones'

export const Footer = () => {
  return (
    <div className='footerDiv'>
        <Botones link="https://youtube.com/" butMensaje="a"/>
        <Botones butMensaje="e"/>
        <Botones butMensaje="i"/>
    </div>
  )
}
