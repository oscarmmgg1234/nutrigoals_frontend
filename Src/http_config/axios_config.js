import axios from 'axios';
import {
  access_server_publicIp_with_port,
  api_server_publicIp_with_port,
  auth_server_publicIp_with_port,
  calc_server_publicIp_with_port,
} from '../Constants';

export const AuthSeverCall = axios.create({
  baseURL: auth_server_publicIp_with_port,
});

export const APITokenCall = axios.create({
  baseURL: access_server_publicIp_with_port,
});

export const APIServerCall = axios.create({
  baseURL: api_server_publicIp_with_port,
});

export const CalcBackend = axios.create({
  baseURL: calc_server_publicIp_with_port,
});
