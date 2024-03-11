import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ( { value } ) => {

    const [ counter, setCounter ] = useState(value)

    const add = () => setCounter(c=> c+1)
    
    const substract = () => setCounter(c=> c-1)
    
    const reset = () => setCounter(value)
    
    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={ add }>
                Aumentar
            </button>
            <button onClick={ substract }>
                Disminuir
            </button>
            <button onClick={ reset }>
                Reset
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}