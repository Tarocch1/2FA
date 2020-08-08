import request from '../utils/request';
import { auth_base, api } from '../constants/api';

export const getToken = () => {
  return request({
    method: 'get',
    baseURL: auth_base,
    url: api.token,
    withCredentials: true,
  });
};

export const checkToken = () => {
  return request({
    method: 'get',
    baseURL: auth_base,
    url: api.checkToken,
  });
};

export const refreshToken = () => {
  return request({
    method: 'put',
    baseURL: auth_base,
    url: api.token,
  });
};
