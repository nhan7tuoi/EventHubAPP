import axios from 'axios';
import queryString from 'query-string';


const axiosClient = axios.create({
  paramsSerializer: param => queryString.stringify(param),
});

axiosClient.interceptors.request.use(async (config:any) => {
    config.headers = {
        Authorization: '',
        Accept: 'application/json',
        ...config.headers,
    };
    config.data 

    return config;
});

axiosClient.interceptors.response.use((response:any) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, error => {
    console.log('Error api',error);
    throw new Error(error.response);
});

export default axiosClient;