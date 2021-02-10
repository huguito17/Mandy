//Nombramos la funcion
const fetchLiquors = async (page) => {
    //Variable que almacena la api
    const endpoint = `https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=${page}`
    //respuestas de la api, forma asincrona.
    //traemos lo de la app
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
}

export default fetchLiquors;