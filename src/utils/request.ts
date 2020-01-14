import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';

export default function request(options: AxiosRequestConfig) {
  const jwt = JSON.parse(window.localStorage.getItem('jwt') || '{}');
  const token = jwt.token || '';
  axios.defaults.headers.common['Token'] = token;
  return axios(options)
    .then(res => res.data)
    .catch(error => {
      message.error(error.message);
      return {
        erred: true,
        error,
      };
    });
}
