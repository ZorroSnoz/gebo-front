import * as axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:2000' });

const apiExpress = {
    getAds() {
      return  instance.get('/')
    }
};

export default apiExpress;