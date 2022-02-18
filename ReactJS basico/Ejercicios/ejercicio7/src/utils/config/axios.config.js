import axios from 'axios';

// Default Axios config

export default axios.create(
    {
        baseURL: 'https://api.chucknorris.io/jokes/random',
        responseType: 'json'
    }
)