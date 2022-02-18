import React from 'react'


export const Imagen = ({clase, id, url}) => {
  return (
    <div>
      <img className={clase} id={id} src={url} alt=""/>
    </div>
    
  )
}

