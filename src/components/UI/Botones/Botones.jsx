import React from 'react'

export const Botones = ({butMensaje, id, event}) => {
  return (
  <div id="buttonsDiv">
      <button onClick={event} id={id} className="buttons">{butMensaje}</button>
  </div>

    
  )
}
