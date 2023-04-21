import { useState } from 'react';

export const Contador = () => {
  
    const [valor, setValor] = useState(0)

    const cambio = ( num : number) => {
        setValor(valor + num)
    }

    return (
        <>
            <h3>Contador</h3>
            <h6>{ valor }</h6>
            <button className="btn btn-danger mx-1 px-2 text-light" onClick={ () => cambio(-1) }>
                -
            </button>
            <button className="btn btn-success mx-1 p-2 text-light" onClick={ () => cambio(1) }>
                +
            </button>
        </>
    )
}
