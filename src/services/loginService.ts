import request from '../utils/request';
import { oauth_base, api } from '../constants/api';

export const checkToken = () => {
  return request({
    method: 'get',
    baseURL: oauth_base,
    url: api.checkToken,
  });
};

export const getToken = (code: string) => {
  return request({
    method: 'post',
    baseURL: oauth_base,
    url: api.token,
    data: {
      code,
      redirect: `${window.location.origin}${window.location.pathname}`,
    },
  });
};

export const refreshToken = () => {
  return request({
    method: 'put',
    baseURL: oauth_base,
    url: api.token,
  });
};
