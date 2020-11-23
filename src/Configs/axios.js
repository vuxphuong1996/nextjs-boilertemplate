import axios from 'axios';

const __token = localStorage.getItem('__token') || '';
// const SERVER_URL = window.origin.includes('vmodev') ? 'https://api.vmodev.com/' : 'http://api.vmodev.com:4000/';
const SERVER_URL = 'http://172.16.1.214:4000/api/v1/';
// console.log(SERVER_URL)

const instance = axios.create({
    baseURL: SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': __token,
    },
});

export default instance;
export { SERVER_URL };
