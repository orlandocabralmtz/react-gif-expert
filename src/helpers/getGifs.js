export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=k0uQQfOiBDLVHYNdnB8qwunQzksreFsR&q=${category}&limit=10`

    const resp = await fetch(url); // se hace la petición a la api
    const { data } = await resp.json(); // se obtiene la data de la respuesta de la api

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;

}
