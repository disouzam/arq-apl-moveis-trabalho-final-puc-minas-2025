import axios from 'axios';

export const API_BASE_URL="https://localhost:5001/"

export function useApi(){
    const api = axios.create({
        baseURL: API_BASE_URL,
    });

    return { get: api.get, post: api.post, put: api.put, patch: api.patch, delete: api.delete}
}