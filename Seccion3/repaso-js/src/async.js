
const getImagen = async () => {
    const api_key = 'h0xA0bYy9ntWbRO2lEiU3h5Nk86BNEM3'    
    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
    
    const {data} = await peticion.json()
    const { url } = data.images.original
    
    let img = document.createElement('img')
    img.src = url
    document.body.append(img)
}

getImagen()