import dacodes from '../api/dacodes';

export const fetchPlayers = () => {
    return async function (dispatch, getState) {
        const response = await dacodes.get('/players');

        dispatch({
            type: 'FETCH_PLAYERS',
            payload: response.data.data.team
        });
    };
};

export const fetchGames = () => {
    return async function (dispatch, getState) {
        const response = await dacodes.get('/games');

        dispatch({
            type: 'FETCH_GAMES',
            payload: response.data.data.games
        });
    };
};