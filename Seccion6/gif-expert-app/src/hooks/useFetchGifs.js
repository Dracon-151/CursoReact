import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ({category}) => {

    const [gifs, setGifs] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        getGifs(category).then(res=>{
            setGifs(res)
            setisLoading(false)
        })
    }, [])

  return {
    isLoading,
    gifs,
  }
}
