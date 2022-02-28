import React from 'react'

export const Inputs = ({tipo, texto, id}) => {
  return (
    <div>
        <input type={tipo} placeholder={texto} id={id}></input>
    </div>
  )
}
