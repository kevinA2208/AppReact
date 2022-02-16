import React from 'react'
import { Footer } from '../../layouts/Footer/Footer'
import { Header } from '../../layouts/Header/Header'
import { MainCounter } from '../../layouts/MainCounter/MainCounter'


export const Counter = () => {
  return (
    <div>
      <Header/>
      <MainCounter/>
      <Footer/>
    </div>
  )
}
