export const Funciones = () => {
  
    const sumar = (num1 : number, num2 : number) : number => {
        return (num1 + num2)
    }

    return (
        <>
            <h3>Funciones</h3>
            { sumar(1, 2) }
        </>
    )
}
