import React from 'react'

export const Botones = ({butMensaje, link}) => {
  return (
  <div>
    <a href={link}>
      <button id='buttons'>{butMensaje}</button>
    </a>

  </div>

    
  )
}
