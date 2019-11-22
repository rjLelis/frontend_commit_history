import axios from 'axios';

const backendAPI = axios.create({
    'baseURL': 'http://localhost:8000/api',
});

const githubAPI = axios.create({
    'baseURL': 'https://api.github.com'
});

export { backendAPI, githubAPI };
