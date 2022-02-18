import React from 'react'
import { CounterImgMain } from '../../layouts/CounterImgMain/CounterImgMain'
import { Footer } from '../../layouts/Footer/Footer'
import { Header } from '../../layouts/Header/Header'


export const CounterImage = () => {
  return (
    <div>
        <Header/>
        <CounterImgMain/>
        <Footer/>
    </div>
  )
}
