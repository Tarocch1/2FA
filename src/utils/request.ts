import axios, { AxiosRequestConfig } from 'axios';

export default function request(options: AxiosRequestConfig) {
  return axios(options)
    .then(res => res.data)
    .catch(error => {
      return {
        erred: true,
        error,
      };
    });
}
