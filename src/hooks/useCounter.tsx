import { useState } from 'react';

export const useCounter = (valorInicial : number = 0) => {
  
    const [valor, setValor] = useState(valorInicial)

    const cambio = ( num : number) => {
        setValor(valor + num)
    }

    return {
        valor,
        cambio,
    }
}
