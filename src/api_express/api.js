import * as axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:2000/' });

const apiExpress = {
  getAds() {
    return instance.get('get-ads')
  },
  addNewUser(userData) {
    return instance.put(`add-new-user`, { userData: userData })
  },
  addNewAd(adData) {
    return instance.put(`add-new-ad`, { adData: adData })
  }
};

export default apiExpress;