import React,{useState, useEffect} from 'react'
import { Imagen } from '../../UI/ImagenMain/Imagen'
import imagen4 from '../../../assets/images/imagen4.jpg'
import imagen5 from '../../../assets/images/imagen5.jpg'
import { Botones } from '../../UI/Botones/Botones'

export const BotonOnMain = () => {

    const [cambio, setCounter] = useState(true)
    const changeCard = () => {setCounter(!cambio)
    }

    useEffect(() => {
        const imgcard1 = document.getElementById('ImagenCard1')
        const imgcard2 = document.getElementById('ImagenCard2')
        const btn = document.getElementById('btnCambio')
        if(cambio === true){
            imgcard1.classList.remove('ImagenCard1')
            imgcard1.classList.add('ImagenCard3')
            imgcard2.classList.remove('ImagenCard2')
            imgcard2.classList.add('ImagenCard4')
            btn.classList.remove('buttons2')
            btn.classList.add('buttons')
            btn.textContent="Cambio"
        }else{
            imgcard1.classList.remove('ImagenCard3')
            imgcard1.classList.add('ImagenCard1')
            imgcard2.classList.remove('ImagenCard4')
            imgcard2.classList.add('ImagenCard2')
            btn.classList.remove('buttons')
            btn.classList.add('buttons2')
            btn.textContent="Original"
        }

    },[cambio]);

  return (
    <div id="divCards">
        <div id='card1'>
            <h2>Card 1</h2>
            <Imagen clase="ImagenCard1" id="ImagenCard1" url={imagen4}/>
        </div>
        <div id='card2'>
            <h2>Card 2</h2>
            <Imagen clase="ImagenCard2" id="ImagenCard2" url={imagen5}/>
        </div>
        <Botones id='btnCambio' event={changeCard} clase='buttons' butMensaje='Original' />
    </div>
  )
    
}

