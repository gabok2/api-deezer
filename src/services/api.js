import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/artist/',
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'x-rapidapi-key': '9501359baamsh97e30d3c6af685cp1fcd13jsneba6fa0cb89d',
  },
});

export default api;
