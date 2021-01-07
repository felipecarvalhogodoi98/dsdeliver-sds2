import axios from 'axios';

const apiURL = 'http://localhost:8080';

export function fetchProducts(){
    return axios(`${apiURL}/products`)
}