/**
 * TODO: Se comento este código ya que por la formac en que funciona axios
 * no se puede obtener la información por restricciones de CORS,
 * en su lugar se utilizara el arreglo de ejemplo que se obtuvo desde
 * postman para poder continuar con la maquetación.
 */
/*

import dacodes from '../api/dacodes';

export const fetchGames = () => {
    return async function(dispatch, getState) {
        const response = await dacodes.get('/games');

        dispatch({
            type: 'FETCH_GAMES',
            payload: response.data
        });
    };
};

export const fetchPlayers = () => {
    return async function(dispatch, getState) {
        const response = await dacodes.get('/players');

        dispatch({
            type: 'FETCH_PLAYERS',
            payload: response.data
        });
    };
};
*/

export const fetchGames = () => {
    return {
        type: 'FETCH_GAMES',
        payload: []
    };
};

export const fetchPlayers = () => {
    return {
        type: 'FETCH_PLAYERS',
        payload: []
    };
};
