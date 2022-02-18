import React from 'react'
import { Imagen } from '../../UI/ImagenMain/Imagen'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import imgCarro2 from '../../../assets/images/imagen2.jpg'

export const AboutUsMain = () => {
  return (
    <div>
        <Header/>
                <div className="aboutUsDiv">
                <h2 id='info'>Carros bajo el agua</h2>
                <Imagen id="img2" url={imgCarro2}/>
            </div>
        <Footer/>
    </div>

  )
}
