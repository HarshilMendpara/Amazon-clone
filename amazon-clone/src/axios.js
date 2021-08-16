import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://amazon-404.herokuapp.com'
})

export default instance;