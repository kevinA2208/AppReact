import React,{useState, useEffect} from 'react'
import { Botones } from '../../UI/Botones/Botones'
import { Imagen } from '../../UI/ImagenMain/Imagen'
import imgCarro3 from '../../../assets/images/imagen3.jfif'



export const CounterImgMain = () => {

  const useCounterImage = () =>{

    const[counterImage, setCounterImage] = useState(0)

      const aumentar = () =>setCounterImage(counterImage + 10)
      const disminuir = () =>setCounterImage(counterImage - 10)
      const reset = () =>setCounterImage(0)


      return {
        counterImage,
        aumentar,
        disminuir,
        reset
    }
}
  
  const {counterImage, aumentar, disminuir, reset} = useCounterImage()

  useEffect(()=>{
    const image3 = document.getElementById('img3')

    if(counterImage>=100){
      image3.classList.add('activo')
      image3.classList.remove('desactivado')
    }else{
      image3.classList.add('desactivado')
      image3.classList.remove('activo')
    }

  },[counterImage])

    return (
      <div>
          <div id="counterImageMain">
              <div id="counterImageText">
                  <h2>Contador de carros bajo el agua 2</h2>
                  <Imagen clase="desactivado" id="img3" url={imgCarro3}/>
                  <h2>{counterImage}</h2>
              </div>
                  <hr></hr>
              <div id="counterImageButtons">
                  <Botones event={aumentar} butMensaje="Aumentar"/>
                  <Botones event={reset} butMensaje="Resetear"/>
                  <Botones event={disminuir} butMensaje="Disminuir"/>
              </div>
          </div>
      </div>
    )
}
