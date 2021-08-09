
// Nos ayuda a realizar la peticion a la API de Gifphy, recibimos la categoria y al final retornamos lo que obtnemos de dicha peticion

export const getGifs = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=skeAYwrQrnGf9Bz1L5r6J5WdS2nHDI9S`; // usamos la funcion de encodeURI() para evitar espacios.
    const resp = await fetch( url );
    const { data } = await resp.json();

    // usamos el map para poder manipular lo obtenido en la peticion y regresar un nuevo objeto: 'gifs'
    const gifs = data.map ( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    } )

    return gifs; // retornamos objeto nuevo
    
}