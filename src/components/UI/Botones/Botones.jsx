import React from 'react'

export const Botones = ({butMensaje, event}) => {
  return (
  <div id="buttonsDiv">
      <button onClick={event} id='buttons'>{butMensaje}</button>
  </div>

    
  )
}
