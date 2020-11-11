import apiExpress from '../api_express/api'
import {AdDataType, AdsInfo} from '../types/types'
import dataPicker from '../services/data_picker'
import {generatorId} from '../services/generator_id'

///////////// Const for actioncreators
const ADD_AD = 'ADD_AD'
const ADD_EDIT_AD = 'ADD_EDIT_AD'
const ADD_POST_EDIT_AD = 'ADD_POST_EDIT_AD'
const DELETE_AD = 'DELETE_AD'
const DELETE_ALL_AD = 'DELETE_ALL_AD'
const DELETE_MY_AD = 'DELETE_MY_AD'
const STOP_TO_LOAD = 'STOP_TO_LOAD'
const GET_ADS = 'GET_ADS'
const GET_MY_ADS = 'GET_MY_ADS'

///////////// Initial state
// :todo need remove any in InitialStateType
type InitialStateType = {
    editAd: any
    myAdsInfo: AdsInfo
    adsInfo: AdsInfo
    adAddLoad: boolean
}
let initialState: InitialStateType = {
    editAd: {},
    myAdsInfo: {
        haveAds: true,
        adsData: []
    },
    adsInfo: {
        haveAds: true,
        adsData: []
    },
    adAddLoad: false
}

///////////// Reduser
const adReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_AD: {
            let myAdsInfo: AdsInfo = {
                haveAds: true,
                adsData: action.adData
            }
            return {
                ...state,
                myAdsInfo: myAdsInfo,
                adAddLoad: true
            }
        }
        case ADD_EDIT_AD: {
            state.editAd = action.adData
            return state
        }
        case ADD_POST_EDIT_AD: {
            let newItem = state.myAdsInfo.adsData.filter((item: any) => item.idAd != action.adData.idAd)
            newItem.push(action.adData)
            state.myAdsInfo.adsData = newItem
            return state
        }
        case DELETE_AD: {
            let newItem = state.myAdsInfo.adsData.filter((item: any) => item.idAd != action.adId)

            let myAdsInfo: AdsInfo = {
                haveAds: true,
                adsData: newItem
            }

            if (newItem.length === 0) {
                myAdsInfo.haveAds = false
            }

            return {
                ...state,
                myAdsInfo: myAdsInfo
            }
        }
        case GET_ADS: {
            let adsInfo: AdsInfo = {
                ...state.adsInfo,
                adsData: action.adsData
            }

            return {
                ...state,
                adsInfo: adsInfo
            }
        }
        case GET_MY_ADS: {
            let myAdsInfo: AdsInfo = {
                adsData: action.myAdsInfo.adsData,
                haveAds: action.myAdsInfo.haveAds
            }
            return {
                ...state,
                myAdsInfo: myAdsInfo
            }
        }
        case DELETE_ALL_AD: {

            let adsInfo: AdsInfo = {
                ...state.adsInfo,
                adsData: action.adsData
            }

            return {
                ...state,
                adsInfo: adsInfo
            }
        }
        case DELETE_MY_AD: {
            let myAdsInfo: AdsInfo = {
                ...state.myAdsInfo,
                adsData: action.adData
            }
            return {
                ...state,
                myAdsInfo: myAdsInfo
            }
        }
        case STOP_TO_LOAD: {
            return {
                ...state,
                adAddLoad: false
            }
        }
        default: {
            return state
        }
    }

}

///////////// Actioncreators
type AddAd_ActionType = {
    type: typeof ADD_AD
    adData: object
}
export let addAd = ():AddAd_ActionType => ({ type: ADD_AD, adData: [] });

export type EditAd_ActionType = {
    type: typeof ADD_EDIT_AD
    adData: AdDataType
}
export let editAd = (adData: AdDataType):EditAd_ActionType => ({ type: ADD_EDIT_AD, adData })

type AdData_ActionType = {
    type: typeof ADD_POST_EDIT_AD
    adData: AdDataType
}
// :todo need added thunk for sync to backend
export let addEditAd = (adData: AdDataType):AdData_ActionType => ({ type: ADD_POST_EDIT_AD, adData })

export type DeleteAd_ActionType = {
    type: typeof DELETE_AD
    adId: string
}
export let deleteAd = (adId: string):DeleteAd_ActionType => ({ type: DELETE_AD, adId })

type DeleteAllAd_ActionType = {
    type: typeof DELETE_ALL_AD
    adsData: object
}
export let deleteAllAd = ():DeleteAllAd_ActionType => ({ type: DELETE_ALL_AD, adsData: [] })

type DeleteMyAd_ActionType = {
    type: typeof DELETE_MY_AD
    adData: object
}
export let deleteMyAd = ():DeleteMyAd_ActionType => ({ type: DELETE_MY_AD, adData: [] })

type StopToLoad_ActionType = {
    type: typeof STOP_TO_LOAD
}
export let stopToLoad = ():StopToLoad_ActionType => ({ type: STOP_TO_LOAD })

type GetAds_ActionType = {
    type: typeof GET_ADS
    adsData: Array<AdDataType>
}
let getAds = (adsData: Array<AdDataType>):GetAds_ActionType => ({ type: GET_ADS, adsData })

type GetMyAds_ActionType = {
    type: typeof GET_MY_ADS
    myAdsInfo: AdsInfo
}
let getMyAds = (myAdsInfo: AdsInfo):GetMyAds_ActionType => ({ type: GET_MY_ADS, myAdsInfo })

///////////// Thanks
export let getAdsThunk = (userId: string | null) => async (dispatch: any) => {
    if (userId === null) {
        console.log('error in getAdsThunk: userId === null')
    } else {
        let response = await apiExpress.getAds(userId);
        dispatch(getAds(response.data))
    }
}

export let getMyAdsThunk = (userId: string) => async (dispatch: any) => {
    let response = await apiExpress.getMyAds(userId);

    if (response.data.length === 0) {
        dispatch(getMyAds({haveAds: false, adsData: []}))
    }
    else {
        dispatch(getMyAds({haveAds: true, adsData: response.data}))
    }
}

export let deleteMyAdThunk = (adId: string) => async (dispatch: any) => {
    let response: any = await apiExpress.deleteAd(adId);

    if (response.data == 'OK') {
        dispatch(deleteAd(adId));
        console.log('Ad to delete.')
    }
    else {
        console.log('DeleteMyAdThunk error.')
    }
}

// :todo need fix any types in thank
export let AddAdThunk = (formData : any, userData: any) => async (dispatch: any) => {

    let categoryText: Array<string> = ['продаж/бартер', 'оголошення', 'продаж', 'купівля/бартер'];
    let time: string = dataPicker();
    let addData: AdDataType = {
        idAd: generatorId(),
        img: formData.adFoto = null,
        description: formData.discription,
        autor: userData.name,
        autorId: userData.idUser,
        typeClass: formData.category,
        typeText: categoryText[formData.category],
        adData: time
    }
    let response: any = await apiExpress.addNewAd(addData)

    if (response.data == 'OK') {
        dispatch(addAd());
        console.log('New ad is added.')
    }
    else {
        console.log('AddAdThunk error.')
    }
}
/////////////

export default adReducer