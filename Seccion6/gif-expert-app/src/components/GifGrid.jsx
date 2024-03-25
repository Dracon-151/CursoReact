import { useFetchGifs } from "../hooks/useFetchGifs"
import { Gif } from "./Gif"

export const GifGrid = ({category}) => {

    const { isLoading, gifs } = useFetchGifs({category})
    
    return (
        <>
            <h5 className="text-center mt-3">
                { category }
            </h5>
            {
                isLoading && (
                    <h2>Cargando...</h2>
                )
            }
            <div className="row mb-2">
                { 
                    gifs.map(gif => 
                    (
                        <div 
                            className="col-md-3"
                            key={gif.id}
                        >
                            <Gif
                                { ...gif }
                            />
                        </div>
                    )) 
                }
            </div>
        </>
    )
}
