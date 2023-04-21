import { useCounter } from "../hooks/useCounter"

export const ContadorConHook = () => {
  
    const { valor, cambio } = useCounter();
    
    return (
        <>
            <h3>Contador con hook</h3>
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
