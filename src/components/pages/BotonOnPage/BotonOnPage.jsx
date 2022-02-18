import React from 'react'
import { BotonOnMain } from '../../layouts/BotonOnMain/BotonOnMain'
import { Footer } from '../../layouts/Footer/Footer'
import { Header } from '../../layouts/Header/Header'


export const BotonOnPage = () => {
  return (
    <div>
        <Header/>
        <BotonOnMain/>
        <Footer/>
    </div>
  )
}
