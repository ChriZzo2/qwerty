import axios from 'axios';
import Cookies from 'js-cookie';
import {CONFIG} from '@/config';

const api = axios.create({
    baseURL: CONFIG.API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers['Token'] = token;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            Cookies.remove('token', {domain: CONFIG.COOKIE_DOMAIN});
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;