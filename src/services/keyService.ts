import request from '../utils/request';
import { mfa_base, api } from '../constants/api';

export const getKeys = () => {
  return request({
    method: 'get',
    baseURL: mfa_base,
    url: api.key,
  });
};
