import * as axios from 'axios'
import {AdDataType, InitialStateAndUserDataType} from '../types/types'

// @ts-ignore
const instance = axios.create({ baseURL: 'http://localhost:2000/' })

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
  }
}

export default apiExpress