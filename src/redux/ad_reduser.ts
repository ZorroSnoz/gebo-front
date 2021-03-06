import apiExpress from '../api_express/api'
import {AddAdFormDataType, AdDataType, AdsInfo, EditAdFormDataType, InitialStateAndUserDataType} from '../types/types'
import dataPicker from '../services/data_picker'
import {generatorId} from '../services/generator_id'
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux_store'
import {AxiosResponse} from 'axios'

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
const LOADING_EDIT_AD_FINISH = 'LOADING_EDIT_AD_FINISH'

///////////// Initial state
type InitialStateType = {
    editAd: AdDataType | {}
    isEditAdLoad: boolean
    isEditAdLoadFinish: boolean
    myAdsInfo: AdsInfo
    adsInfo: AdsInfo
    adAddLoad: boolean
}
let initialState: InitialStateType = {
    editAd: {},
    isEditAdLoad: false,
    isEditAdLoadFinish: false,
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
const adReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
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
            return {
                ...state,
                editAd: {}
            }
        }
        case DELETE_AD: {
            let newItem = state.myAdsInfo.adsData.filter((item: AdDataType) => item.idAd != action.adId)

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
        case LOADING_EDIT_AD_FINISH: {
            return {...state, isEditAdLoadFinish: action.toggle}
        }
        default: {
            return state
        }
    }

}

///////////// Actioncreators
// actions types
type ActionsTypes =
    AddAd_ActionType |
    EditAd_ActionType |
    AdData_ActionType |
    DeleteAd_ActionType |
    DeleteAllAd_ActionType |
    DeleteMyAd_ActionType |
    StopToLoad_ActionType |
    GetAds_ActionType |
    GetMyAds_ActionType |
    LoadEditAdFinish_ActionType
//
type AddAd_ActionType = {
    type: typeof ADD_AD
    adData: Array<AdDataType>
}
let addAd = (): AddAd_ActionType => ({type: ADD_AD, adData: []})

export type EditAd_ActionType = {
    type: typeof ADD_EDIT_AD
    adData: AdDataType
}
export let editAd = (adData: AdDataType): EditAd_ActionType => ({type: ADD_EDIT_AD, adData})

type AdData_ActionType = {
    type: typeof ADD_POST_EDIT_AD
}
// :todo need added thunk for sync to backend
let addEditAd = (): AdData_ActionType => ({type: ADD_POST_EDIT_AD})

export type DeleteAd_ActionType = {
    type: typeof DELETE_AD
    adId: string
}
export let deleteAd = (adId: string): DeleteAd_ActionType => ({type: DELETE_AD, adId})

type DeleteAllAd_ActionType = {
    type: typeof DELETE_ALL_AD
    adsData: Array<AdDataType>
}
export let deleteAllAd = (): DeleteAllAd_ActionType => ({type: DELETE_ALL_AD, adsData: []})

type DeleteMyAd_ActionType = {
    type: typeof DELETE_MY_AD
    adData: Array<AdDataType>
}
export let deleteMyAd = (): DeleteMyAd_ActionType => ({type: DELETE_MY_AD, adData: []})

type StopToLoad_ActionType = {
    type: typeof STOP_TO_LOAD
}
export let stopToLoad = (): StopToLoad_ActionType => ({type: STOP_TO_LOAD})

type GetAds_ActionType = {
    type: typeof GET_ADS
    adsData: Array<AdDataType>
}
let getAds = (adsData: Array<AdDataType>): GetAds_ActionType => ({type: GET_ADS, adsData})

type GetMyAds_ActionType = {
    type: typeof GET_MY_ADS
    myAdsInfo: AdsInfo
}
let getMyAds = (myAdsInfo: AdsInfo): GetMyAds_ActionType => ({type: GET_MY_ADS, myAdsInfo})

type LoadEditAdFinish_ActionType = {
    type: typeof LOADING_EDIT_AD_FINISH
    toggle: boolean
}

export let changeLoadEditAdFinish = (toggle: boolean): LoadEditAdFinish_ActionType => ({type: LOADING_EDIT_AD_FINISH, toggle: toggle})

///////////// Thunks
// types for thunks
type ThunkActions = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
//
export let getAdsThunk = (userId: string | null): ThunkActions => async (dispatch) => {
    if (userId === null) {
        console.log('error in getAdsThunk: userId === null')
    } else {
        let response: AxiosResponse<Array<AdDataType>> = await apiExpress.getAds(userId)
        dispatch(getAds(response.data))
    }
}

export let getMyAdsThunk = (userId: string): ThunkActions => async (dispatch) => {
    let response: AxiosResponse<Array<AdDataType>> = await apiExpress.getMyAds(userId);

    if (response.data.length === 0) {
        dispatch(getMyAds({haveAds: false, adsData: []}))
    } else {
        dispatch(getMyAds({haveAds: true, adsData: response.data}))
    }
}

export let deleteMyAdThunk = (adId: string): ThunkActions => async (dispatch) => {

    // response have many data, because here any type
    let response: AxiosResponse<string> = await apiExpress.deleteAd(adId)
    if (response.data == 'OK') {
        dispatch(deleteAd(adId))
        console.log('Ad to delete.')
    } else {
        console.log('DeleteMyAdThunk error.')
    }
}

export let AddAdThunk = (formData: AddAdFormDataType, userData: InitialStateAndUserDataType): ThunkActions => async (dispatch) => {

    let category = +formData.category
    let categoryText: Array<string> = ['продаж/бартер', 'оголошення', 'продаж', 'купівля/бартер']
    let time: string = dataPicker()
    let addData: AdDataType


    if (userData.name != null && userData.idUser != null) {
        let autor = userData.name
        let autorId = userData.idUser

        addData = {
            idAd: generatorId(),
            img: formData.adFoto = null,
            description: formData.discription,
            autor: autor,
            autorId: autorId,
            typeClass: formData.category,
            typeText: categoryText[category],
            adData: time
        }
        // response have many data, because here any type
        let response: AxiosResponse<string> = await apiExpress.addNewAd(addData)
        if (response.data === 'OK') {
            dispatch(addAd())
            console.log('New ad is added.')
        } else {
            console.log('AddAdThunk error.')
        }

    } else {
        console.log('error in AddAdThunk: userData have null')
    }
}

export let AddEditAdThunk = (formData: EditAdFormDataType): ThunkActions => async (dispatch) => {

    let typeClass: number = +formData.typeClass
    let categoryText: Array<string> = ['продаж/бартер', 'оголошення', 'продаж', 'купівля/бартер']
    let time: string = dataPicker()
    let addData: AdDataType = {
        ...formData,
        typeClass: formData.typeClass,
        typeText: categoryText[typeClass],
        adData: time
    }
    let response: AxiosResponse<string> = await apiExpress.editAd(addData)

    if (response.statusText === 'OK') {
        dispatch(addEditAd())
        dispatch(changeLoadEditAdFinish(true))
    } else {
        console.log(`error in AddEditAdThunk`)
    }
}
/////////////

export default adReducer