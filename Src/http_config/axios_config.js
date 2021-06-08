import axios from 'axios';

export const AuthSeverCall = axios.create({
  baseURL: 'http://52.13.191.118',
});

export const APITokenCall = axios.create({baseURL: 'http://35.83.99.147:5000'});

export const APIBackend = axios.create({baseURL: 'http://35.83.115.52:5000'});

export const UserBackend = axios.create({baseURL: 'http://52.32.49.80:5000'});
