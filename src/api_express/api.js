import * as axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:2000/' });

const apiExpress = {
  getAds(userId) {
    return instance.get(`get-ads/${userId}`)
  },
  getMyAds(userId) {
    return instance.get(`get-my-ads/${userId}`)
  },
  deleteAd(adId) {
    return instance.get(`delete-ad/${adId}`)
  },
  addNewUser(userData) {
    return instance.put(`add-new-user`, { userData: userData })
  },
  addNewAd(adData) {
    return instance.put(`add-new-ad`, { adData: adData })
  }
};

export default apiExpress;