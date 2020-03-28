import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerproject-a6359.firebaseio.com/'
});

export default instance;