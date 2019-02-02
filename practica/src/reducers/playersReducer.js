/**
 * TODO: Se retorna un arreglo estatico para poder provar las funciones, porque
 * no se puede obtener la información por restricciones de CORS. En caso de que
 * se pueda consultar el servicio sustituir el arrglo por action.payload
 * para considerar los elementos obtenidos desde el servicio
 */
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PLAYERS':
            return [...state, action.payload];
        default:
            return state;
    }
};
