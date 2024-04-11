import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})

    useEffect(() => {
        
        const getCoords = ({x,y}) =>{
            setCoords({x,y})
            console.log(x,y)
        }

        window.addEventListener('mousemove', getCoords)
        
        return () => {
            window.removeEventListener('mousemove', getCoords)
        }
    }, [])
    
    return (
        <>
            <h1>Usuario ya existe</h1>
            { coords.x } { coords.y }
        </>
    )
}
