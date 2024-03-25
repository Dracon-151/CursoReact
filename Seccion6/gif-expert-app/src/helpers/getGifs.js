export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=h0xA0bYy9ntWbRO2lEiU3h5Nk86BNEM3&q=${ category }&limit=12`

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(gif =>{
        const { id, embed_url: url, title } = gif

        return { id, url, title }
    })

    return gifs
}