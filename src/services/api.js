import axios  from 'axios';  

const api = axios.create({
    baseURL:'https://fathomless-fortress-06365.herokuapp.com/'
})

export default api;