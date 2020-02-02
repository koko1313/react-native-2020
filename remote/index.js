import axios from 'axios';
import config from './config';

const instance = axios.create({
    baseURL: config.getFullBaseUrl(),
});

export function get(path, params) {
    return instance.get(path, {
        params: params,
    });
}

export function post(path, params) {
    return instance.post(path, params);
}

export default {
    get,
    post,
}