import axios from 'axios';

export const AuthSeverCall = axios.create({
  baseURL: 'http://34.216.10.88:5000',
});

export const APITokenCall = axios.create({baseURL: 'http://34.216.10.88:5002'});

export const APIBackend = axios.create({baseURL: 'http://34.216.10.88:5001'});

export const CalcBackend = axios.create({baseURL: 'http://34.216.10.88:5003'});

