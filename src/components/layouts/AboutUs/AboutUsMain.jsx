import React from 'react'
import { Imagen2 } from '../../UI/ImagenMain/Imagen2'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'


export const AboutUsMain = () => {
  return (
    <div>
        <Header/>
                <div className="aboutUsDiv">
                <h2 id='info'>Carros bajo el agua</h2>
                <Imagen2/>
            </div>
        <Footer/>
    </div>

  )
}
