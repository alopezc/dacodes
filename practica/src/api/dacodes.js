import axios from 'axios';

export default axios.create({
    baseURL: 'https://venados.dacodes.mx/api',

    headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        crossdomain: true
    }
});
