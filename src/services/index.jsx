import axios from 'axios';

const baseURL = 'http://localhost:8080/';
const service = axios.create({ baseURL });
service.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error, 'tst');
    if (error.response.status === 403) {
      await localStorage.clear();
    }
  }
);

export { service };
