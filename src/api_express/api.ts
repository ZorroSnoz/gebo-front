import axios from 'axios'
import {AdDataType, InitialStateAndUserDataType} from '../types/types'

const instance = axios.create({ baseURL: 'https://gebo-app.herokuapp.com/' })
// http://localhost:2000/
// https://gebo-app.herokuapp.com/

const apiExpress = {
  getAds(userId: string) {
    return instance.get(`get-ads/${userId}`)
  },
  getMyAds(userId: string) {
    return instance.get(`get-my-ads/${userId}`)
  },
  deleteAd(adId: string) {
    return instance.get(`delete-ad/${adId}`)
  },
  addNewUser(userData: InitialStateAndUserDataType) {
    return instance.put(`add-new-user`, { userData: userData })
  },
  addNewAd(adData: AdDataType) {
    return instance.put(`add-new-ad`, { adData: adData })
  },
  editAd(adData: AdDataType) {
    return instance.put(`edit-ad`, { adData: adData })
  }
}

export default apiExpress