import React,{useState, useEffect} from 'react'
import { Botones } from '../../UI/Botones/Botones'
import { Imagen } from '../../UI/ImagenMain/Imagen'
import imagen4 from '../../../assets/images/imagen4.jfif'
import imagen5 from '../../../assets/images/imagen5.jfif'

export const MainOnOff = () => {
    
    const useCount = () =>{

        const[count, setCount] = useState(0)

        const btnIncrease = () => setCount(count+1)
        
    }

    const {count, btnIncrease}=useCount()

    useEffect(() =>{
        const imgCard1 = document.getElementById('imgOnOff1')
        const imgCard2 = document.getElementById('imgOnOff2')
        const buttonOnOff = document.getElementById('btnOnOff')

            if(count % 2 === 0){
                imgCard1.classList.add('disabled')
                imgCard2.classList.add('disabled')
                buttonOnOff.classList.add('disabledBtn')
                imgCard1.classList.remove('enabled')
                imgCard2.classList.remove('enabled')
                buttonOnOff.classList.remove('enabledBtn')
            }else{
                imgCard1.classList.add('enabled')
                imgCard2.classList.add('enabled')
                buttonOnOff.classList.add('enabledBtn')
                imgCard1.classList.remove('disabled')
                imgCard2.classList.remove('disabled')
                buttonOnOff.classList.remove('disabledBtn')
            }
                
        })[count]

  return (
    <div>
        <div id="card1">
            <h2>Card 1</h2>
            <Imagen clase="imgOnOff1" id="imgOnOff1" url={imagen4} alt=""/>
        </div>
        <div id="card2">
            <h2>Card 2</h2>
            <Imagen clase="imgOnOff2" id="imgOnOff2" url={imagen5} alt=""/>
        </div>
        <Botones butMensaje="Enabled" onClick={btnIncrease} className="disabledBtn" id="btnOnOff"  />
    </div>
  )
}

