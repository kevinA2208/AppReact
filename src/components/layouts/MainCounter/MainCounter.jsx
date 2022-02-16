import React,{useState} from 'react'
import { Botones } from '../../UI/Botones/Botones'

export const MainCounter = () => {

    const useCounter = () =>{

    const [counter, setCounter] = useState(0)
        
        const aumentar = () =>setCounter(counter + 1)
        const disminuir = () =>setCounter(counter - 1)
        const reset = () =>setCounter(0)


        return {
            counter,
            aumentar,
            disminuir,
            reset
        }
    
}

    const {counter, aumentar, disminuir, reset} = useCounter()


    return(
        <div>
            <div id="counterMain">
                <div id="counterText">
                    <h2>Contador de carros bajo el agua</h2>
                    <h2>{counter}</h2>
                </div>
                    <hr></hr>
                <div id="counterButtons">
                    <Botones event={aumentar} butMensaje="Aumentar"/>
                    <Botones event={reset} butMensaje="Resetear"/>
                    <Botones event={disminuir} butMensaje="Disminuir"/>
                </div>
            </div>
        </div>

    )
}

