import React from 'react'

export const Inputs = ({name, tipo, texto, id}) => {
  return (
    <div>
        <input name={name} type={tipo} placeholder={texto} id={id}></input>
    </div>
  )
}
