import request from '../utils/request';
import { two_fa_base, api } from '../constants/api';

export const getKeys = () => {
  return request({
    method: 'get',
    baseURL: two_fa_base,
    url: api.key,
  });
};
