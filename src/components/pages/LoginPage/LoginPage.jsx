import React from 'react'
import { MainLogin } from '../../layouts/MainLogin/MainLogin'
import { Footer } from '../../layouts/Footer/Footer'
import { Header } from '../../layouts/Header/Header'


export const LoginPage = () => {
  return (
    <div>
        <Header/>
        <MainLogin/>
        <Footer/>
    </div>
  )
}

