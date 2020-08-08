import axios, { AxiosRequestConfig } from 'axios';

export default function request(options: AxiosRequestConfig) {
  const jwt = JSON.parse(window.localStorage.getItem('jwt') || '{}');
  const token = jwt.token || '';
  if (token) axios.defaults.headers.common['Token'] = token;
  return axios(options)
    .then(res => res.data)
    .catch(error => {
      return {
        erred: true,
        error,
      };
    });
}
