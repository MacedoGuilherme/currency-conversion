import axios from "axios";

const token = 'ab7cd525f6439d9f2b334f65'

const api = axios.create({
    baseURL: 'https://v6.exchangerate-api.com/v6/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;