import axios from 'axios';

/**
 * Se configura los paramentros básicos de axios para
 * poder consumir desde los sercicios API
 */
export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://venados.dacodes.mx/api',

    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});
