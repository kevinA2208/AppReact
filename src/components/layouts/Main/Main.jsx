import React from 'react'
import { Imagen } from '../../UI/ImagenMain/Imagen'
import imgCarro1 from '../../../assets/images/imagen1.jpg'

export const Main = () => {
  return (
    <div className='mainDiv'>
        <h2 id='name'>Kevin Andres Usama Trespalacios</h2>
        <Imagen id="img1" url={imgCarro1}/>
    </div>
  )
}
